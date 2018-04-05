var screenTableUrl = "/v1/api/admin/solution/page"
var screenQueryObject = {
    pageSize: 20
};
var screenColumnsArray =[
    {
        field: 'content', title: '内容',
        align: 'left',
        width: '80%',
        formatter: function (value, row, index) {
            return row.content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
                //.substr(0,50);
        }
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button= '<a class="btn btn-info" href="/question/solutionEdit/'+row.id+'">编辑</a>&nbsp;';
            button +='<a class="btn btn-danger" onclick="del(\''+row.id+'\')">删除</a>&nbsp;';
            return button

        }
    }
];
function del(id) {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/solution/del?id="+id,
        data:{},
        async: true,
        dataType:'json',
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl,function(){});
        }
    });
}
function doEdit(id) {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/solution/findById?id="+id,
        data:{},
        async: true,
        dataType:'json',
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
           //var object = JSON.stringify(data);
            testEditor.setMarkdown(data.data.content);
        }
    });
}
var initTable=function() {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    var questionId = paramArray[0].substr(url.indexOf('=') + 1);
    screenQueryObject.questionId = questionId;

    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl,function(){});

    //testEditor = initMarkdownplug('txtblogcontent');
}
initTable();
