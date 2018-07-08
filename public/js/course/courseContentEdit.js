var  courseId;
var editor;
function init(){
    //editor = initMarkdownplug('courseContentId');

    var url ='/v1/api/admin/courseContent/findById/'+$("#id").val();
    soaryang.getAjax(url,{},function(data){
        var message = data.data.markDownContent;
        editor = initMarkdownplug('courseContentId');
        console.log(message);
        $("#container").val(message);
        $("#courseContentName").val(data.data.courseContentName);
        $("#id").val(data.data.id);
        $("#courseId").val(data.data.courseId);
    },function (data){

    })

}
var saveQuestion=function() {
    var url ='/v1/api/admin/courseContent/save';
    var data = {
        "markDownContent":toMarkdown(editor.getMarkdown()),
        "courseId":$("#courseId").val(),
        "id":$("#id").val(),
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