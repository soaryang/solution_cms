var id;
var init = function () {
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    id = paramArray[0].substr(url.indexOf('=') + 1);

    $("#id").val(id);
    var url = "/v1/api/admin/user/findUserInfo";
    //var roleSelect = $("#roleSelect");
    $.danmuAjax(url, 'get','json',{'id':id}, function (data) {
        var repData = data.data;
        $("#id").val(repData.id);
        $("#openId").val(repData.openId);
    },function (data) {

    });
}
var saveEdit=function() {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/user/save",
        data:$('#mainForm').serialize(),// 序列化表单值
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            //window.location.href="跳转页面"
            window.location.href="/user/userList";
        }
    });
}

init();