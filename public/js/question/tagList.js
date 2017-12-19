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
        field: 'imagePath',
        title: '名称',
        align: 'center',
        width:'20%',
        formatter: function (value, row, index) {
            return '<image src="http://www.yangtengfei.cn/images/'+value+'"/>'
        }
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info">编辑</a>&nbsp;';
            button += '<a class="btn btn-info" href="/admin/question/questionList?tagId='+row.id+'">列表</a>&nbsp;';

            if(row.useStatus==1){
                button += '<a class="btn btn-danger" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',2)">禁用</a>&nbsp;';
            }else{
                button += '<a class="btn btn-info" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',1)">使用</a>&nbsp;';
            }

            button += '<a class="btn btn-danger">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/tag/page';
var screenQueryObject = {
    pageSize: 20,
    useStatus:$("#useStatus").val()
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
    var url = "/v1/api/admin/tag/tagUse?id="+id+"&status="+status;
    $.commonAjax(url, 'get','json',{}, function (data) {
        $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
}