/*$.validator.setDefaults({
    submitHandler: function() {
        alert("提交事件!");
    }
});*/
var countdown=10;
var url = "/v1/api/mail/sendMail";
$().ready(function() {
    var handler1 = function (captchaObj) {
        /*$("#submit1").click(function (e) {
            var result = captchaObj.getValidate();
            if (!result) {
                $("#notice1").show();
                setTimeout(function () {
                    $("#notice1").hide();
                }, 2000);
                e.preventDefault();
            }
        });*/
        $(".registerButton").click(function () {
            if (! $("#signupForm").valid()) {
                return;
            }
            var result = captchaObj.getValidate();
            if (result==undefined) {
                $("#notice1").show();
                setTimeout(function () {
                    $("#notice1").hide();
                }, 2000);
                //e.preventDefault();
                alert('请设置验证码')
                return;
            }
            $.ajax({
                type: "POST",
                url:"/v1/api/register",
                data:$('#signupForm').serialize(),// 序列化表单值
                dataType:"json",
                async: false,
                error: function(request) {
                    alert("Connection error");
                    return;
                },
                success: function(data) {
                    //initable();
                    if(data.code!==200){
                        alert(data.message);
                        return;
                    }
                }
            });
        });
        // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
        captchaObj.appendTo("#captcha1");
        captchaObj.onReady(function () {
            $("#wait1").hide();
        });
        // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
    };
    $.ajax({
        url: "/v1/api/captcha?t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function (data) {
            // 调用 initGeetest 初始化参数
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
            initGeetest({
                gt: data.gt,
                challenge: data.challenge,
                new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
                offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                product: "float", // 产品形式，包括：float，popup
                width: "100%"
                // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
            }, handler1);
        }
    });
    $("#getverifyCode").click(function () {
        var b = $("#signupForm").validate().element($("#email"));
        if(b){
            $.commonAjax(url, 'get','json',{'email':$("#email").val()}, function (data) {
                if(data.code==200){
                    settime();
                }else{
                    alert(data.message);
                }
            });
        }
    });


    $("#signupForm").validate({
        rules: {
            name: {
                required: true,
                rangelength:[4,20],
                regexname:true
            },
            password: {
                required: true,
                regexPassword:true,
                rangelength:[8,15],
            },
            repassword: {
                required: true,
                equalTo: "#password"
            },
            email: {
                required: true,
                regexEmail:true,
                email: true
            },
            verifyCode:{
                required: true,
            }
        },
        messages: {
            name: {
                required:"请输入用户名",
                rangelength:"用户名长度必须在4～15位之间",
            },
            password: {
                required: "请输入密码"
            },
            repassword: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母",
                equalTo: "两次密码输入不一致"
            },
            email: {
                required: "请请入邮箱"
            },
            verifyCode: {
                required: "请输入注册码"
            }
        }
    })

    /*$(".registerButton").click(function () {
        if (! $("#signupForm").valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url:"/v1/api/register",
            data:$('#signupForm').serialize(),// 序列化表单值
            dataType:"json",
            async: false,
            error: function(request) {
                alert("Connection error");
                return;
            },
            success: function(data) {
                //initable();
                if(data.code!==200){
                    alert(data.message);
                    return;
                }
            }
        });
    });*/

});
jQuery.validator.addMethod("regexname", function(value, element) {
    var userblank = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)[0-9A-Za-z]{5,10}$/;
    return this.optional(element) ||(userblank.test(value));
}, "需包含数字和大小写字母中至少两种字符的5-10位字符");

/*jQuery.validator.addMethod("regexPassword", function(value, element) {
    return this.optional(element) || /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
}, "一个大写，一个小写，一个符号");*/
jQuery.validator.addMethod("regexPassword", function(value, element) {
    var userblank = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)[0-9A-Za-z]{8,15}$/;
    return this.optional(element) ||(userblank.test(value));
}, "需包含数字和大小写字母中至少两种字符的8-15位字符");


jQuery.validator.addMethod("regexEmail", function(value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test(value);
}, "请输入有效的电子邮件地址");


var countdown=10;

function t(){
    setTimeout(function() {
        settime()
    },1000)
}
function settime() {
    if (countdown == 0) {
        $("#getverifyCode").attr("disabled",false);
        $("#getverifyCode").val("发送邮件");
        clearTimeout(t);
        countdown = 10;
    } else {
        $("#getverifyCode").attr("disabled",true);
        var html = "等待时间(" + countdown +")";
        $("#getverifyCode").val(html);
        countdown--;
        t();
    }
}