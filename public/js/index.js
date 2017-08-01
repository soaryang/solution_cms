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
                    html+='<div class="channel-item">';
                    html+='<div class="likes">';
                    html+='<img src="http://47.94.18.12/images/temp.jpg" width="70" height="70" alt="">';
                    html+='</div>';
                    html+='<div class="bd">';
                    html+='<h3><a href="/question/'+questionObject.id+'">'+questionObject.name+'</a></h3>';
                    html+='<div class="source">';
                    html+='<span class="from">FROM:管理员</span>';
                    html+='<span class="from">回答:'+questionObject.solutionCount+'</span>';
                    html+='<span class="from">访问:'+0+'</span>';
                    html+='<span class="from">关注:'+0+'</span>';
                    html+='<span class="from">今天16:48</span>';
                    html+='</div>';
                    html+='<div class="source">';
                    html+='<span class="tag">spring</span>';
                    html+='</div>';
                    html+='</div>';
                    html+='</div>';
                    //html+='<div style="display: inline-block; border-bottom:  1px dashed #ddd;width: 100%; margin-bottom: 10px;">';
                    //html+='<div class="questionItem">';
                    //html+='<div class="questionAuthor">';
                    //html+='<a>';
                    //html+='<img src="//b.thumbs.redditmedia.com/-mwUmWH_cvdH9fAsdBpgsz6gy4l2JIKSwuLrDHVIbXM.jpg" width="70" height="70" alt=""></a>';
                    //html+='<img src="" class="likes">'
                    //html+='<a class="likes"><span>关注</span><br/><span>50</span></a>';
                    //html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>回答</span><br/><span>'+questionObject.solutionCount+'</span></a>';
                    //html+='<a class="tag" style=" background-color: rgb(255,236,244); width: 50px; height: 50px;"><span>访问</span><br/><span>50</span></a>';
                    //html+='</div>';
                    //html+='<div class="questionInfo">';
                    //html+='<div class="title">';
                    //html+='<a href="/question/'+questionObject.id+'">'+questionObject.name+'</a>';
                    //html+='</div>';
                    //html+='<div>';
                    //html+='<a class="tag" style=" background-color: rgb(255,236,244);">'+questionObject.tagName+'</a>';
                    //html+='</div>';
                    //html+='</div>';
                    //html+='</div>';
                }
                var page = 0;
                if(count%pageSize==0){
                    page  = count/pageSize;
                }else{
                    page  = count/pageSize +1;
                }

                var pageHtml='<ul class="pagination pagination-lg">';
                if(index==1){
                    pageHtml+=' <li class="disabled"><a href="javascript:void(0);">&laquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+1+')" >&laquo;</a></li>';
                }

                for(var i=1; i<= page; i++){
                    if(index==i){
                        pageHtml+=' <li class="active"><a href="javascript:void(0);">'+i+'</a></li>';
                    }else{
                        pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+i+')">'+i+'</a></li>';
                    }
                }
                if(parseInt(page)==index){
                    pageHtml+=' <li class="disabled"><a href="javascript:void(0);">&raquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+parseInt(page)+')">&raquo;</a></li>';
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