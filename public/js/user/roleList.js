var screenColumnsArray =[
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
        width:'20%',
        formatter: function (value, row, index) {
            var button = '';
            button += '<a class="btn btn-danger">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/role/page';
var screenQueryObject = {
    pageSize: 20
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);



