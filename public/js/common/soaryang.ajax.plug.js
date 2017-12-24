/*!
 * danmu.ajax.plug v1.0.0
 */
(function ($) {
    $.commonAjax = function (url, method,dataType,data, success, error) {
        $.ajax({
            contentType: "application/json; charset=utf-8",
            type: method,
            url: url,
            data: data,
            dataType: dataType,
            success: success,
            error: error
        });
    }
})(jQuery);

var soaryang = {
    getAjax: function (url, data, success, error) {
        soaryang.commonAjax(url, "get", data, success, error,'application/json; charset=utf-8');
    }, postAjax: function (url, data, success, error) {
        soaryang.commonAjax(url, "post", data, success, error,'application/x-www-form-urlencoded');
    }, loading: function () {
        var model = $("#my-modal-loading");
        //model.modal("toggle")
    }, loadingHide: function () {
        var model = $("#my-modal-loading");
        // model.modal("close")
    }, commonAjax: function (url, method,data, success, error,contentType) {
        soaryang.loading();
        $.ajax({
            contentType: contentType,
            type: method,
            url: url,
            data: data,
            dataType: "json",
            success: function (a) {
                soaryang.loadingHide();
                success(a)
            },
            error: function (a) {
                soaryang.loadingHide();
                error(a)
            }
        })
    }
};