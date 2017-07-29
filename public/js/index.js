
var init = function () {
    var url ="/cachedata/questioncache.json";
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
        var html='';
        if(data!=null){
            for(var i=0; i<data.length; i++){
                var questionObject = data[i];
                html+='<div style="display: inline-block; border-bottom:  1px dashed #ddd;width: 100%;">';
                html+='<div style="float: left;margin-top: 20px;">';
                html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>关注</span><br/><span>50</span></a>';
                html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>回答</span><br/><span>50</span></a>';
                html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>访问</span><br/><span>50</span></a>';
                html+='</div>';
                html+='<div style="float: left;margin-top: 10px;margin-left: 15px;">';
                html+='<h4><a href="http://spring4all.com/question/328">'+questionObject.name+'</a></h4>';
                html+='<div>';
                html+='<a class="tag" style=" background-color: rgb(255,236,244);">'+questionObject.tagName+'</a>';
                html+='</div>';
                html+='</div>';
                html+='</div>';
            }
            $("#questionList").html(html);
        }else{
            $("#questionList").html('没有数据');
        }


    }, function (data) {

    });
}
init();