var editor;
function init(){
    editor = initMarkdownplug('tagDescribeContent');
}
var saveTag=function() {

    var url ='/v1/api/admin/article/save';
    var data = {
        "content":toMarkdown(editor.getMarkdown()),
        "tagId":$("#tagId").val(),
        "articleName":$("#articleName").val()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/article/"+$("#tagId").val();
        }
    },function (data) {

    })
}
init();