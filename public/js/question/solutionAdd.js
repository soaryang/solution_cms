var testEditor;
var questionId;
var init=function() {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    questionId = paramArray[0].substr(url.indexOf('=') + 1);
    testEditor = editormd("txtblogcontent", {
        width   : "100%",
        height  : 640,
        syncScrolling : "single",
        path    : "/plug/markdown/lib/",
        imageUpload : true,
        imageFormats   : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
        imageUploadURL : "/v1/api/admin/solution/upload",
        saveHTMLToTextarea:true,
        toolbarIcons : function() {
            return [
                "undo"
                ,"|","redo"
                ,"|","bold"
                ,"|","del"
                ,"|","italic"
                ,"|","quote"
                ,"|","ucwords"
                ,"|","uppercase"
                ,"|","lowercase"
                ,"|","h1"
                ,"|","h2"
                ,"|","h3"
                ,"|","h4"
                ,"|","h5"
                ,"|","h6"
                ,"|","list-ul"
                ,"|","list-ol"
                ,"|","hr"
                ,"|","link"
                ,"|","reference-link"
                ,"|","image"
                ,"|","code"
                ,"|","preformatted-text"
                ,"|","code-block"
                ,"|","table"
                ,"|","datetime"
                ,"|","html-entities"
                ,"|","pagebreak"
                ,"|","goto-line"
                ,"|","watch"
                ,"|","unwatch"
                ,"|","preview"
                ,"|","fullscreen"
                ,"|","clear"
                ,"|","search"
                ,"|","help"
                ,"|","info"
            ]
        }
    });
}
function doShowContent() {
    //alert(toMarkdown(testEditor.getMarkdown(testEditor.getMarkdown())));
    alert(toMarkdown(testEditor.getMarkdown()));
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/solution/save",
        data:{"content":toMarkdown(testEditor.getMarkdown()),"questionId":questionId},// 序列化表单值
        async: true,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            //window.location.href="跳转页面"
        }
    });
}

init();
