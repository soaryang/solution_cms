var  questionId;
function init(){
    var url = location.href.substring(location.href.indexOf("?")+1);
    var paramArray =  url.split("&");
    questionId = paramArray[0].substr(url.indexOf('=') + 1);
    var url = "/v1/api/admin/question/findById?id="+questionId;
    $.danmuAjax(url,'GET','json',{},function (data) {
        if(data.code='2000'){
            $("#tagId").val(data.data.tagId);
            $("#tagName").val(data.data.tagName);
            $("#name").val(data.data.name);
            $("#questionId").val(data.data.id);
        }
    },function (error) {

    })

}

$( "#tagName" ).autocomplete({
    //source: availableTags
    source: function(request, response){

        var url = '/v1/api/admin/tag/page/'+ request.term ;
        $.ajax( {
            'url': url,
            dataType: 'json',
            success: function(dataObj){
                var array = dataObj.rows;
                //response(dataObj); //将数据交给autocomplete去展示
                response( $.map(array, function( item ) {
                    return {
                        label: item.name,
                        value: item.id,
                    }
                }));
            }
        } );
    },
    select: function(event, ui){
        //alert(ui.item.label);
        $(this).val(ui.item.label);
        event.preventDefault();
    },
    change :function (event, ui) {
        if(ui.item==null){
            $("#tagId").val('');
        }else{
            $("#tagId").val(ui.item.value);
        }

    }
});

var saveQuestion=function() {
    $.ajax({
        type: "POST",
        url:"/v1/api/admin/question/save",
        data:$('#mainForm').serialize(),// 序列化表单值
        async: false,
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            //window.location.href="跳转页面"
            window.location.href="/question/questionList";
        }
    });
}

init();