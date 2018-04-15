var  tagId;
var editor;
function init(){
    editor = initMarkdownplug('txtblogcontent');
}
var saveQuestion=function() {
    var url ='/v1/api/admin/course/save';
    var data = {
        "describe":toMarkdown(editor.getMarkdown()),
        "courseName":$("#courseName").val()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/course/courseList";
        }
    },function (data) {
    })
}
init();