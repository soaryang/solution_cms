var testEditor;
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
                var jsonObject = data.data;
                var solutionArray = jsonObject.solutionViewList;
                var html="";
                if(solutionArray!=null){
                    for(var i=0; i<solutionArray.length; i++){
                        html+=markdown.toHTML(solutionArray[i].content);
                        //console.log(html);
                    }
                    $("#solutionList").html(html);
                }
            }
        }
    });
}
doShowContent();

