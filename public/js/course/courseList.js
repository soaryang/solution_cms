var screenColumnsArray =[
    /*{
        field: 'id',
        title: '编号',
        align: 'center',
        width:'20%'
    },*/
    {
        field: 'name',
        title: '名称',
        align: 'center',
        width:'20%'
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/course/courseEdit/'+row.id+'">编辑</a>&nbsp;';
            button += '<a class="btn btn-info" href="/course/courseContentList/'+row.id+'">子课程列表</a>&nbsp;'
            button += '<a class="btn btn-danger" onclick="delTag(\''+row.id+'\',1)">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/course/page';
var screenQueryObject = {
    pageSize: 20
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);

$('.search').click(function () {
    screenQueryObject.id = $("#id").val();
    screenQueryObject.name = $("#name").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
});

function choseUseStatus() {
    screenQueryObject.pageNumber=1;
    screenQueryObject.useStatus=$("#useStatus").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

function setUseStatus(id,status) {
    var url = "/v1/api/admin/tag/tagUse?id="+id+"&status="+status;
    $.commonAjax(url, 'get','json',{}, function (data) {
        $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
}

$(".btn-tag-indexPage").click(function () {
    var url = "/v1/api/admin/tag/setIndexPage";
    $.commonAjax(url, 'get','json',{}, function (data) {
        //$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
});
var delTag = function (param) {
    if(confirm('是否决定删除')){
        var url = "/v1/api/admin/tag/del/"+param;
        $.commonAjax(url, 'get','json',{}, function (data) {
            $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
        }, function (data) {

        });
    }
}