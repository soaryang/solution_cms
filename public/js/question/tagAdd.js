var editor;
function init(){
    editor = initMarkdownplug('tagDescribeContent');
}
var saveTag=function() {
    $.ajaxFileUpload({
        url:'/v1/api/admin/tag/save',
        async: false,
        fileElementId:'file',//file标签的id
        dataType: 'json',//返回数据的类型
        data:{'tagName':$("#tagName").val(),'describe':toMarkdown(editor.getMarkdown()),},//一同上传的数据
        success: function (data, status) {
            window.location="/question/tagList";
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
}
init();