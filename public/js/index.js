var pageSize = 10;
var init = function (index) {
    var url ="/cachedata/questioncache.json";
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
        var html='';
        if(data!=null){
            var count = data.count;
            var questionArray = data.questionList;
            if(questionArray!=null){
                var array =questionArray.slice((index-1)*pageSize,index*pageSize)
                for(var i=0; i<array.length; i++){
                    var questionObject = array[i];
                    html+='<div style="display: inline-block; border-bottom:  1px dashed #ddd;width: 100%;">';
                    html+='<div style="float: left;margin-top: 10px;">';
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
                if(count%pageSize==0){
                    page  = count/pageSize;
                }else{
                    page  = count/pageSize +1;
                }

                var pageHtml='<ul class="pagination pagination-lg">';
                if(index==1){
                    pageHtml+=' <li><a href="#" onclick="init('+1+')" disabled="disabled">&laquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="#" onclick="init('+1+')" >&laquo;</a></li>';
                }

                for(var i=1; i<= page; i++){
                    if(index==i){
                        pageHtml+=' <li><a href="#" onclick="init('+i+')" disabled="disabled">'+i+'</a></li>';
                    }else{
                        pageHtml+=' <li><a href="#" onclick="init('+i+')">'+i+'</a></li>';
                    }
                }
                if(parseInt(page)==index){
                    pageHtml+=' <li><a href="#" onclick="init('+parseInt(page)+')" disabled="disabled">&raquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="#" onclick="init('+parseInt(page)+')">&raquo;</a></li>';
                }
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
init(1);