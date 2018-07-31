var  questionId;
var editor;
function init(){
    var url = "/v1/api/admin/sourceCode/findById?id="+$("#questionId").val();
    $.commonAjax(url,'GET','json',{},function (data) {
        if(data.code='2000'){
            editor = initMarkdownplug('txtblogcontent');
            $("#tagId").val(data.data.tagId);
            $("#tagName").val(data.data.tagName);
            $("#name").val(data.data.name);
            $("#questionId").val(data.data.id);
            $("#container").val(data.data.describe);
            console.log(data.data.describe);
        }
    },function (error) {

    })

}

$( "#tagName" ).autocomplete({
    //source: availableTags
    source: function(request, response){

        var url = '/v1/api/admin/sourceCode/page/'+ request.term ;
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
    var url ='/v1/api/admin/sourceCode/save';
    var data = {
        "describe":toMarkdown(editor.getMarkdown()),
        "tagId":$("#tagId").val(),
        "id":$("#questionId").val(),
        "name":$("#name").val()
    };
    soaryang.postAjax(url,data,function (data) {
        if(data.code==200){
            window.location.href="/sourceCode/sourceCodeList";
        }
    },function (data) {
    })
}

init();