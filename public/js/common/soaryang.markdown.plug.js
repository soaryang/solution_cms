var  initMarkdownplug =function (id) {
    return editormd(id, {
        //width   : "90%",
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