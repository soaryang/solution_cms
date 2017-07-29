
var init = function () {
    var url ="/cachedata/questioncache.json";
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
        var html='';
        if(data!=null){
            var count = data.count;
            var array = data.questionList;
            if(array!=null){
                for(var i=0; i<array.length; i++){
                    var questionObject = array[i];
                    html+='<div style="display: inline-block; border-bottom:  1px dashed #ddd;width: 100%;">';
                    html+='<div style="float: left;margin-top: 20px;">';
                    html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>关注</span><br/><span>50</span></a>';
                    html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>回答</span><br/><span>50</span></a>';
                    html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>访问</span><br/><span>50</span></a>';
                    html+='</div>';
                    html+='<div style="float: left;margin-top: 10px;margin-left: 15px;">';
                    html+='<h4><a href="javascript:void(0);">'+questionObject.name+'</a></h4>';
                    html+='<div>';
                    html+='<a class="tag" style=" background-color: rgb(255,236,244);">'+questionObject.tagName+'</a>';
                    html+='</div>';
                    html+='</div>';
                    html+='</div>';
                }
                var page = 0;
                if(count%10==0){
                    page  = count/10
                }else{
                    page  = count/10 +1;
                }

                var pageHtml='<ul class="pagination pagination-lg">';
                pageHtml+=' <li><a href="#">&laquo;</a></li>';
                for(var i=1; i<= page; i++){
                    pageHtml+=' <li><a href="#">'+i+'</a></li>';
                }
                pageHtml+=' <li><a href="#">&raquo;</a></li>';
                pageHtml+='</ul>';
                $("#pagePlugId").html(pageHtml);
                $("#questionList").html(html);
            }
        }else{
            $("#questionList").html('没有数据');
        }


    }, function (data) {

    });
}
init();