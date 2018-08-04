var  questionId;
var editor;
function init(){
    editor = initMarkdownplug('txtblogcontent');
    var url = "/v1/api/admin/sourceCode/findById/"+$("#id").val();
    soaryang.getAjax(url,{},function (data) {
        if(data.code==200){
            var sourceCodeObject = data.data;
            $("#name").val(sourceCodeObject.name);
            $("#url").val(sourceCodeObject.url);
            $("#container").val(sourceCodeObject.describe);

        }
        console.log(JSON.stringify(data))
    },function (data) {
    })

}

var save=function() {
    var url ='/v1/api/admin/sourceCode/update';
    var data = {
        "id":$("#id").val(),
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