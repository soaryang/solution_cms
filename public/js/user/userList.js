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
        title: '权限分配',
        align: 'center',
        width:'20%',
        formatter: function (value, row, index) {
            var select = "";
            select += '<select style="width: 100px;" id="roleSelect" onchange="changRole(\''+row.id+'\')">';
            var array = row.roleViewList;
            var roleId = row.roleId;
            if(array!=null && array.length>0){
                for(var i=0; i<array.length; i++){
                    if(roleId==array[i].id){
                        select +='<option value="'+array[i].id+'" selected="selected">'+array[i].name+'</option>';
                    }else{
                        select +='<option value="'+array[i].id+'">'+array[i].name+'</option>';
                    }
                }
            }
            select += "</select>";
            return select;
        }
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        width:'20%',
        formatter: function (value, row, index) {
            var button = '';
            button += '<a class="btn btn-info" onclick="editUser(\''+row.id+'\')">编辑</a>';
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

var editUser = function (id) {
    alert(id);
    window.location="/user/userEdit?id="+id;
}

function initRole() {
    var url = "/v1/api/admin/role/findAll";
    //var roleSelect = $("#roleSelect");
    $.commonAjax(url, 'get','json',{}, function (data) {
        if(data.code==200){
            var array = data.data;
            if(array!=null && array.length>0){
                for(var i=0; i<array.length; i++){
                    $("#roleSelect").append('<option value="'+array[i].id+'">'+array[i].name+'</option>')
                }
            }
        }
    },function (data) {

    });
}

function init() {
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}


$('.search').click(function () {
    screenQueryObject.subscribeState =$("#subscribeState").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
})
init();
function changRole(id){
    var url = '/v1/api/admin/userRole/setRole'
    $.commonAjax(url, 'get','json',{'userId':id,'roleId':$("#roleSelect").val()}, function (data) {
        if(data.code==200){

        }
    },function (data) {

    });
}
