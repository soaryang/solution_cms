var testEditor;
var id;
var init=function() {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    id = paramArray[0].substr(url.indexOf('=') + 1);
    //testEditor = initMarkdownplug('txtblogcontent');
    //testEditor = initMarkdownplug('txtblogcontent');
    //doShowContent();
    doShowContent();
}

function doShowContent(){

    $.ajax({
        type: "GET",
        url:"/v1/api/solution/findById?id="+id,
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
                if(solutionArray!=null){
                    for(var i=0; i<solutionArray.length; i++){
                        var html = converter.makeHtml(solutionArray[i]);
                        console.log(html);
                    }
                }
            }
        }
    });
}
init();

