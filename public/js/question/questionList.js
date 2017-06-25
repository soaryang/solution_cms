var screenColumnsArray =[
    {
        field: 'name',
        title: '名称',
        align: 'center'
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info">编辑</a>&nbsp;';
            button += '<a class="btn btn-danger" onclick="del(\''+row.id+'\')">删除</a>&nbsp;';
            button += '<a class="btn btn-success" href="/question/solutionList?questionId='+row.id+'">解决方案列表</a>&nbsp;';
            button += '<a class="btn btn-success" href="/question/solutionAdd?questionId='+row.id+'">添加解决方案</a>&nbsp;';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/question/page';
var tagId;
var screenQueryObject = {
    pageSize: 20
};

function del(id) {
    $.ajax({
        type: "GET",
        url:"/v1/api/admin/question/del/"+id,
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

var initPage =function () {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    tagId = paramArray[0].substr(url.indexOf('=') + 1);
    screenQueryObject.tagId = tagId;
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl,function(){});
}
initPage();

