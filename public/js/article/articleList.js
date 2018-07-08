var screenColumnsArray =[
    {
        field: 'id',
        title: '编号',
        align: 'center',
        width:'20%'
    },
    {
        field: 'articleName',
        title: '名称',
        align: 'center',
        width:'20%'
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/article/articleEdit/'+row.id+'">编辑</a>&nbsp;';
            if(row.useStatus==1){
                button += '<a class="btn btn-danger" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',2)">禁用</a>&nbsp;';
                button += '<a class="btn btn-danger" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',0)">不使用</a>&nbsp;';
            }else{
                button += '<a class="btn btn-info" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',1)">使用</a>&nbsp;';
            }
            button += '<a class="btn btn-danger" onclick="delTag(\''+row.id+'\',1)">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/article/page';
var screenQueryObject = {
    pageSize: 20,
    useStatus:$("#useStatus").val(),
    tagId:$("#tagId").val()
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);

$('.search').click(function () {
    screenQueryObject.id = $("#id").val();
    screenQueryObject.name = $("#name").val();
    screenQueryObject.useStatus=$("#useStatus").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
});

function choseUseStatus() {
    screenQueryObject.pageNumber=1;
    screenQueryObject.useStatus=$("#useStatus").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

function setUseStatus(id,status) {
    var url = "/v1/api/admin/article/tagUse?id="+id+"&status="+status;
    $.commonAjax(url, 'get','json',{}, function (data) {
        $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
}

$(".btn-tag-indexPage").click(function () {
    var url = "/v1/api/admin/article/setIndexPage";
    $.commonAjax(url, 'get','json',{}, function (data) {
        //$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
});
var delTag = function (param) {
    if(confirm('是否决定删除')){
        var url = "/v1/api/admin/article/del/"+param;
        $.commonAjax(url, 'get','json',{}, function (data) {
            $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
        }, function (data) {

        });
    }
}