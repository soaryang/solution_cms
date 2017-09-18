var pageSize = 10;
var urlnewQuestion ="/cachedata/newquestioncache.json";
var urlhotQuestion ="/cachedata/hotquestioncache.json";
var url="";
var init = function (index,type) {
    //$(".questionListDiv").load("/cachedata/questionList.html");
    if(type==1){
        url =urlnewQuestion;
    }else if(type==2){
        url =urlhotQuestion;
    }
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
        var html='';
        if(data!=null){
            var count = data.count;
            var questionArray = data.questionList;
            if(questionArray!=null){
                $(".question_"+type).html('');
                $("#pagePlugId").html('');
                var array =questionArray.slice((index-1)*pageSize,index*pageSize)
                for(var i=0; i<array.length; i++){
                    var questionObject = array[i];
                    html+='<div class="channel-item">';
                    html+='<div class="likes">';
                    html+='<img src="/images/temp.jpg" width="70" height="70" alt="">';
                    html+='</div>';
                    html+='<div class="bd">';
                    html+='<h3><a href="/question/'+questionObject.id+'">'+questionObject.name+'</a></h3>';
                    html+='<div class="source">';
                    html+='<span class="from">FROM:管理员</span>';
                    html+='<span class="from">回答:'+questionObject.solutionCount+'</span>';
                    html+='<span class="from">访问:'+0+'</span>';
                    html+='<span class="from">关注:'+0+'</span>';
                    html+='<span class="from">日期:'+$.dateFormat(questionObject.createTime)+'</span>';
                    html+='</div>';
                    html+='<div class="source">';
                    html+='<span class="tag">'+questionObject.tagName+'</span>';
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
                    pageHtml+=' <li class="disabled"><a href="javascript:void(0);">&laquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+1+','+type+')" >&laquo;</a></li>';
                }

                for(var i=1; i<= page; i++){
                    if(index==i){
                        pageHtml+=' <li class="active"><a href="javascript:void(0);">'+i+'</a></li>';
                    }else{
                        pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+i+','+type+')">'+i+'</a></li>';
                    }
                }
                if(parseInt(page)==index){
                    pageHtml+=' <li class="disabled"><a href="javascript:void(0);">&raquo;</a></li>';
                }else{
                    pageHtml+=' <li><a href="javascript:void(0);" onclick="init('+parseInt(page)+','+type+')">&raquo;</a></li>';
                }
                pageHtml+='</ul>';
                $("#pagePlugId").html(pageHtml);
                $(".question_"+type).html(html);
            }
        }else{
            $("#questionList").html('没有数据');
        }


    }, function (data) {

    });
}
init(1,1);

function setTitle(type) {
    init(1,type);
    var size = $(".title li").length;
    for(var i=1; i<=size; i++){
        if(type==i){
            $(".question_"+i).show();
            $(".question_"+i+"_li").addClass("active");
        }else{
            $(".question_"+i).hide();
            $(".question_"+i+"_li").remove("active");
        }
    }
}
