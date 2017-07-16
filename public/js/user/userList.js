var screenColumnsArray =[
    /*{
        field: 'id',
        title: '编号',
        align: 'center',
        width:'20%'
    },*/
    {
        field: 'openId',
        title: 'openId',
        align: 'center',
        width:'20%'
    },
    {
        field: 'id',
        title: '用户编号',
        align: 'center',
        width:'20%'
    },
    {
        field: 'subscribeState',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            if (row.subscribeState == 0) {
                return "订阅";
            }else if (row.subscribeState == 1) {
                return "取消订阅";
            }
            return "其他";
        }
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '';
            button += '<a class="btn btn-danger">删除</a>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/user/page';
var screenQueryObject = {
    pageSize: 20,
    subscribeState:$("#subscribeState").val()
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);

$('.search').click(function () {
    screenQueryObject.subscribeState =$("#subscribeState").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
})
