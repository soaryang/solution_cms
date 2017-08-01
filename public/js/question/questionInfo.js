var testEditormdView, testEditormdView2;

function init() {
    testEditormdView =function () {
        return editormd("test-editormd-view", {
            width        : "90%",
            height       : 720
        });
    }

}

function doShowContent(){

    $.ajax({
        type: "GET",
        url:"/v1/api/question/findById?id="+$("#questionId").val(),
        data:{},
        async: true,
        dataType:'json',
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            /*var message = data.data.content;
            testEditor = initMarkdownplug('txtblogcontent');
            console.log(message);
            $("#container").val(message);*/
            if(data.code ==200){
                init();
                var jsonObject = data.data;
                var solutionArray = jsonObject.solutionViewList;
                var html="";
                if(solutionArray!=null) {

                    for (var i = 0; i < solutionArray.length; i++) {
                        html += solutionArray[i].content;
                        //console.log(html);
                    }
                    //$("#solutionList").html(html);
                    testEditormdView =editormd.markdownToHTML("test-editormd-view",{
                        markdown: html,//+ "\r\n" + $("#append-test").text(),
                        //htmlDecode:false,       // 开启 HTML 标签解析，为了安全性，默认不开启
                        //htmlDecode : "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
                        //toc             : false,
                        tocm            : true,    // Using [TOCM]
                        //tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
                        //gfm             : false,
                        //tocDropdown     : true,
                        markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
                        emoji           : true,
                        taskList        : true,
                        tex             : true,  // 默认不解析
                        flowChart       : true,  // 默认不解析
                        sequenceDiagram : true,  // 默认不解析
                        theme:"dark"
                    });
                    /**
                     testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                        markdown: html,//+ "\r\n" + $("#append-test").text(),
                        //htmlDecode:false,       // 开启 HTML 标签解析，为了安全性，默认不开启
                        //htmlDecode : "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
                        //toc             : false,
                        tocm            : true,    // Using [TOCM]
                        //tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
                        //gfm             : false,
                        //tocDropdown     : true,
                        markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
                        emoji           : true,
                        taskList        : true,
                        tex             : true,  // 默认不解析
                        flowChart       : true,  // 默认不解析
                        sequenceDiagram : true,  // 默认不解析
                        path    : "/plug/markdown/lib/",
                        theme        : (localStorage.theme) ? localStorage.theme : "dark",

                        // Preview container theme, added v1.5.0
                        // You can also custom css class .editormd-preview-theme-xxxx
                        previewTheme : (localStorage.previewTheme) ? localStorage.previewTheme : "dark",

                        // Added @v1.5.0 & after version is CodeMirror (editor area) theme
                        editorTheme  : (localStorage.editorTheme) ? localStorage.editorTheme : "pastel-on-dark"
                    });
                     */
                }
            }
        }
    });
}

function themeSelect(id, themes, lsKey, callback)
{
    var select = $("#" + id);

    for (var i = 0, len = themes.length; i < len; i ++)
    {
        var theme    = themes[i];
        var selected = (localStorage[lsKey] == theme) ? " selected=\"selected\"" : "";

        select.append("<option value=\"" + theme + "\"" + selected + ">" + theme + "</option>");
    }

    select.bind("change", function(){
        var theme = $(this).val();

        if (theme === "")
        {
            alert("theme == \"\"");
            return false;
        }

        console.log("lsKey =>", lsKey, theme);

        localStorage[lsKey] = theme;
        callback(select, theme);
    });

    return select;
}

var tagsToReplace = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function safe_tags_replace(str) {
    return str.replace(/[&<>]/g, replaceTag);
}
doShowContent();

