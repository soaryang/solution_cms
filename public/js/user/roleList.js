var screenColumnsArray =[
    {
        width:'50%',
        field: 'name',
        title: '名称',
        align: 'center'
    },
    {
        field: '', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/question/questionEdit?questionId='+row.id+'">编辑</a>&nbsp;';
            button += '<a class="btn btn-info" href="/question/questionEdit?questionId='+row.id+'">禁用</a>&nbsp;';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/role/page';
var screenQueryObject = {
    pageSize: 20
};

$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);

