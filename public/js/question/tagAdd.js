var saveTag=function() {
    /*$.ajax({
        type: "POST",
        url:"/v1/api/admin/tag/save",
        data:$('#mainForm').serialize(),// 序列化表单值
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            //window.location.href="跳转页面"
            window.location.href="/admin/question/tagList";
        }
    });*/

    $.ajaxFileUpload({
        url:'/v1/api/admin/tag/save',
        async: false,
        fileElementId:'file',//file标签的id
        dataType: 'json',//返回数据的类型
        data:{'tagName':$("#tagName").val()},//一同上传的数据
        success: function (data, status) {
            console.log(data)
        },
        error: function (data, status, e) {
            alert(e);
        }
    });
}