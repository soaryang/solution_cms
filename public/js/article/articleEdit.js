var editor;
var tagId;
(function () {
    editor = initMarkdownplug('tagDescribeContent');
    var url = "/v1/api/admin/article/findById/"+$(".id").val();
    $.commonAjax(url, 'get','json',{}, function (data) {
        //console.log(data)
        if(data.code==200){
            tagId =  data.data.tagId;
            $("#articleName").val(data.data.articleName);
            $("#container").val(data.data.content);
        }
    }, function (data) {

    });
})();
var saveArticle=function() {

    var url ='/v1/api/admin/article/save';
    var data = {
        "content":toMarkdown(editor.getMarkdown()),
        "id":$("#id").val(),
        "articleName":$("#articleName").val()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/article/"+tagId;
        }
    },function (data) {

    })
}