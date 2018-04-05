var testEditor;
var id;
var init=function() {
    id=$("#solutionId").val();
    doShowContent();
}

function doShowContent(){

    $.ajax({
        type: "GET",
        url:"/v1/api/admin/solution/findById?id="+id,
        data:{},
        async: true,
        dataType:'json',
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            var message = data.data.content;
            testEditor = initMarkdownplug('txtblogcontent');
            console.log(message);
            $("#container").val(message);
        }
    });
}

function doEdit() {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/solution/edit",
        data:{"content":toMarkdown(testEditor.getMarkdown()),"id":id},// 序列化表单值
        async: true,
        dataType:'json',
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            window.location="/question/solutionList?questionId="+data.data.questionId;
        }
    });
}




/*function doEdit() {
    //alert(toMarkdown(testEditor.getMarkdown(testEditor.getMarkdown())));
    //alert(toMarkdown(testEditor.getMarkdown()));
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/solution/save",
        data:{"content":toMarkdown(testEditor.getMarkdown()),"questionId":questionId},// 序列化表单值
        async: true,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            window.history.back(-1);
        }
    });
}*/
init();

