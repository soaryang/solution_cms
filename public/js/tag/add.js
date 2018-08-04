var editor;
function init(){
    editor = initMarkdownplug('tagDescribeContent');
}

$(".tagImage").click(function () {
    $(".fileUpload").click();
});

var saveTag=function() {
    $.ajaxFileUpload({
        url:'/v1/api/admin/tag/save',
        async: false,
        fileElementId:'file',//file标签的id
        dataType: 'json',//返回数据的类型
        data:{'tagName':$("#tagName").val(),'describe':toMarkdown(editor.getMarkdown()),},//一同上传的数据
        success: function (data, status) {
            window.location="/tag/list";
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
}

function setImage() {
    var r= new FileReader();
    f=document.getElementById('file').files[0];
    r.readAsDataURL(f);
    r.onload=function  (e) {
        //document.getElementById('show').src=this.result;
        $(".tagImage").attr('src',this.result);
    }
}
init();