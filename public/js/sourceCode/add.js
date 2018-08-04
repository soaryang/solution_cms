var  tagId;
var editor;
function init(){
    editor = initMarkdownplug('describe');
}

var save=function() {
    var url ='/v1/api/admin/sourceCode/insert';
    var data = {
        "tagId":$("#tagId").val(),
        "describe":toMarkdown(editor.getMarkdown()),
        "name":$("#name").val(),
        "url":$("#url").val()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/sourceCode/list";
        }
    },function (data) {
    })
}
init();