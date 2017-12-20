(function () {
    //lert('sdfsdfsd');
})();

$(".tagImage").click(function () {
   $(".fileUpload").click();
   /*function () {
       $(".tagImage").attr('src',obj.value);image.src = obj.value;
   });*/
});

$(".save").click(function () {
    $.ajaxFileUpload({
        url:'/v1/api/admin/tag/save',
        async: false,
        fileElementId:'file',//file标签的id
        dataType: 'json',//返回数据的类型
        data:{
            'tagName':$("#tagName").val(),
            'tagId':$(".tagId").val()
        },//一同上传的数据
        success: function (data, status) {
            console.log(data)
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
});
function setImage() {
    //alert(obj.value);
    //$(".tagImage").attr('src',obj.value);

    var r= new FileReader();
    f=document.getElementById('file').files[0];
    r.readAsDataURL(f);
    r.onload=function  (e) {
        //document.getElementById('show').src=this.result;
        $(".tagImage").attr('src',this.result);
    }
}