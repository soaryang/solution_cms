/**
 * Created by Administrator on 2017/6/24 0024.
 */
function login(){
    //var userName = $('#userName').val(), password = $('#userName').val();

    var data = 'username=' + $('#userName').val() + '&password=' + $('#password').val();

    $.post("/v1/api/login",{username:$('#userName').val(),password:$('#password').val()},function(result){
        $("span").html(result);
    });

   /* $.ajax({
        data: data,
        timeout: 1000,
        type: 'POST',
        url: '/v1/api/login'

    }).done(function(data, textStatus, jqXHR) {
        //showMeYourJqXHR('When loginform is done', jqXHR);
        ///showMeYourCookies('When loginform is done');

        //window.location = cookie.url;

    }).fail(function(jqXHR, textStatus, errorThrown) {

    });*/
   /* $.ajax({
        type : "POST",
        dataType : 'json',
        data : {
            j_username: userName,
            j_password: password
        },
        url : "/v1/api/login",
        success : function(result){
            if(result)  {
                window.location.href = "/";
            }else {
                $('#username').focus();
                //loginBtn.removeAttr("disabled");
                //alert('failed');
            }
        },
        error: function(err){
            //loginBtn.removeAttr("disabled");
        }
    });*/
};
