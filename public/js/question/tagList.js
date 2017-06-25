var screenColumnsArray =[
    {
        field: 'id',
        title: '编号',
        align: 'center'
    },
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
            button += '<a class="btn btn-info" href="/question/questionList?question='+row.id+'">问题列表</a>&nbsp;';
            button += '<a class="btn btn-info" href="/question/questionList">使用</a>&nbsp;';
            button += '<a class="btn btn-danger">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/tag/page';
var screenQueryObject = {
    pageSize: 20
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl,function(){});
