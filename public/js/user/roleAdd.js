var saveRole=function() {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/role/save",
        data:$('#mainForm').serialize(),// 序列化表单值
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            //window.location.href="跳转页面"
            window.location.href="/user/roleList";
        }
    });
}