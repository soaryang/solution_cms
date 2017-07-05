var testEditor;
var screenTableUrl = "/v1/api/admin/solution/page"
var screenQueryObject = {
    pageSize: 20
};
var screenColumnsArray =[
    {
        field: 'content', title: '内容',
        align: 'center',
        width: '80%',
        formatter: function (value, row, index) {
            return marked(row.content.substr(0,300));
        }
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button= '<a class="btn btn-info" onclick="doEdit(\''+row.id+'\')">编辑</a>&nbsp;';
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

    testEditor = initMarkdownplug('txtblogcontent');
}
initTable();
