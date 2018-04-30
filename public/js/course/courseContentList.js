var screenColumnsArray =[
    {
        field: 'courseContentName',
        title: '名称',
        align: 'center',
        width:"20%"
    },
    {
        field: 'id', title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button = '<a class="btn btn-info" href="/course/courseContentEdit/'+row.id+'">编辑</a>&nbsp;';
            button += '<a class="btn btn-danger" onclick="del(\''+row.id+'\')">删除</a>&nbsp;';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/courseContent/page';
var courseId;
var screenQueryObject = {
    pageSize: 30
};

var classAdd  = function () {
    window.location="/course/courseContentAdd/"+courseId;
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

    courseId = $("#courseId").val();

    screenQueryObject.courseId = courseId;
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

initPage();

