var  courseId;
var editor;
function init(){
    editor = initMarkdownplug('courseContentId');
}
var saveQuestion=function() {
    var url ='/v1/api/admin/courseContent/save';
    alert($("#container").val());
    var data = {
        "markDownContent":toMarkdown(editor.getMarkdown()),
        "courseId":$("#courseId").val(),
        "courseContentName":$("#courseContentName").val()
        //"content":editor.getHTML()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/course/courseContentList/"+$("#courseId").val();
        }
    },function (data) {
    })
}
init();