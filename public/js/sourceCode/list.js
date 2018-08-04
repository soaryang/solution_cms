var screenColumnsArray =[
    {
        field: 'name',
        title: '源码项目',
        align: 'center',
        formatter: function (value, row, index) {
            var content = "<a href='"+row.url+"' target='_blank'>"+row.name+"</a>";
            return content;
        }
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/sourceCode/edit/'+row.id+'">编辑</a>&nbsp;';
            button += '<a class="btn btn-danger" onclick="del(\''+row.id+'\')">删除</a>&nbsp;';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/sourceCode/page';
var tagId;
var screenQueryObject = {
    pageSize: 30
};


function del(id) {
    soaryang.getAjax("/v1/api/admin/sourceCode/delete/"+id,{},function (data) {
        if(data.code==200){
            window.location.href="/sourceCode/list";
        }
    },function (data) {

    })
}

var initPage =function () {
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

initPage();

