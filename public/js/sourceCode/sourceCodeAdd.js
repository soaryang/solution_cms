var testEditor;
var questionId;
var init=function() {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    questionId = paramArray[0].substr(url.indexOf('=') + 1);
    testEditor = initMarkdownplug('txtblogcontent');
}
function doShowContent() {
    //alert(toMarkdown(testEditor.getMarkdown(testEditor.getMarkdown())));
    //alert(toMarkdown(testEditor.getMarkdown()));
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/sourceCode/save",
        data:{"content":toMarkdown(testEditor.getMarkdown()),"questionId":questionId},// 序列化表单值
        async: true,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            window.history.back(-1);
        }
    });
}

init();
