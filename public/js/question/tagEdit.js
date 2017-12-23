(function () {
    //lert('sdfsdfsd');
    //alert($(".tagId").val());
    var url = "/v1/api/admin/tag/findById/"+$(".tagId").val();
    $.commonAjax(url, 'get','json',{}, function (data) {
        //console.log(data)
        if(data.code==200){
            $("#name").val(data.data.name);
            var d = new Date();
            $(".tagImage").attr('src',_ImageWebSite+data.data.imagePath+"?random="+d);
        }
    }, function (data) {

    });
})();

$(".tagImage").click(function () {
   $(".fileUpload").click();
   /*function () {
       $(".tagImage").attr('src',obj.value);image.src = obj.value;
   });*/
});

$(".save").click(function () {
    $.ajaxFileUpload({
        url:'/v1/api/admin/tag/update',
        async: false,
        fileElementId:'file',//file标签的id
        dataType: 'json',//返回数据的类型
        data:{
            'tagName':$("#name").val(),
            'tagId':$(".tagId").val()
        },
        success: function (data, status) {
            console.log(data);
            window.location="/question/tagList";
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
});
function setImage() {
    var r= new FileReader();
    f=document.getElementById('file').files[0];
    r.readAsDataURL(f);
    r.onload=function  (e) {
        //document.getElementById('show').src=this.result;
        $(".tagImage").attr('src',this.result);
    }
}