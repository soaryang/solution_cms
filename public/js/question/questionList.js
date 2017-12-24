var screenColumnsArray =[
    {
        field: 'name',
        title: '名称',
        align: 'center',
        width:"20%"
    },
    {
        field: 'tagName',
        title: '名称',
        align: 'center'
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/question/questionEdit?questionId='+row.id+'">编辑</a>&nbsp;';
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
    pageSize: 30
};

function jumpToAddPage() {
    if(tagId!=null && tagId!=''){
        window.location="/question/questionAdd?tagId="+tagId;
    }else{
        window.location="/question/questionAdd";
    }

}

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
            $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
        }
    });
}

var initPage =function () {
    var paramIndex = location.href.indexOf("?");
    if(paramIndex!=-1){
        var url = location.href.substring(paramIndex+1);
        var paramArray =  url.split("&");
        tagId = paramArray[0].substr(url.indexOf('=') + 1);
    }else{
        tagId = '';
    }

    screenQueryObject.tagId = tagId;
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

$(".btn-tag-indexPageHotQuestion").click(function () {
    var url="/v1/api/admin/question/hostQuestion"
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
    }, function (data) {

    });
});

$(".btn-tag-indexPageNewQuestion").click(function () {
    var url="/v1/api/admin/question/newQuestion"
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
    }, function (data) {

    });
});
initPage();

