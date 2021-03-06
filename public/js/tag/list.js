var screenColumnsArray =[
    /*{
        field: 'id',
        title: '编号',
        align: 'center',
        width:'20%'
    },*/
    {
        field: 'name',
        title: '名称',
        align: 'center',
        width:'20%'
    },
    {
        field: 'netUrl',
        title: '名称',
        align: 'center',
        width:'20%',
        formatter: function (value, row, index) {
            var d = new Date();
            //return '<image class="tagImage" src="'+_ImageWebSite+value+'?'+d+'"/>'

            return '<image class="tagImage" src="'+value+'?'+d+'"/>'
        }
    },
    {
        field: '',
        title: '操作',
        align: 'center',
        formatter: function (value, row, index) {
            var button='<div style="text-align: left;">';
            button += '<a class="btn btn-info" href="/tag/edit/'+row.id+'">编辑</a>&nbsp;';
            button += '<a class="btn btn-info" href="/question/questionList?tagId='+row.id+'">问题列表</a>&nbsp;';
            button += '<a class="btn btn-info" href="/article/'+row.id+'">文章列表</a>&nbsp;';
            if(row.useStatus==1){
                button += '<a class="btn btn-danger" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',2)">禁用</a>&nbsp;';
                button += '<a class="btn btn-danger" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',0)">不使用</a>&nbsp;';
            }else{
                button += '<a class="btn btn-info" href="javascript:void(0);" onclick="setUseStatus(\''+row.id+'\',1)">使用</a>&nbsp;';
            }
            button += '<a class="btn btn-danger" onclick="delTag(\''+row.id+'\',1)">删除</a>&nbsp;';
            button += '<a class="btn btn-info" onclick="setIndexPage(\''+row.id+'\',1)">设置首页tag</a>&nbsp;';
            button += '<a class="btn btn-info" href="/sourceCode/add/'+row.id+'">添加源码</a>';
            button +='</div>';
            return button;
        }
    }
];

var screenTableUrl = '/v1/api/admin/tag/page';
var screenQueryObject = {
    pageSize: 20,
    useStatus:$("#useStatus").val()
};
$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);

$('.search').click(function () {
    screenQueryObject.id = $("#id").val();
    screenQueryObject.name = $("#name").val();
    screenQueryObject.useStatus=$("#useStatus").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
});

function choseUseStatus() {
    screenQueryObject.pageNumber=1;
    screenQueryObject.useStatus=$("#useStatus").val();
    $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
}

function setUseStatus(id,status) {
    var url = "/v1/api/admin/tag/tagUse?id="+id+"&status="+status;
    $.commonAjax(url, 'get','json',{}, function (data) {
        $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
}

$(".btn-tag-indexPage").click(function () {
    var url = "/v1/api/admin/tag/setIndexPage";
    $.commonAjax(url, 'get','json',{}, function (data) {
        //$.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
    }, function (data) {

    });
});
var delTag = function (param) {
    if(confirm('是否决定删除')){
        var url = "/v1/api/admin/tag/del/"+param;
        $.commonAjax(url, 'get','json',{}, function (data) {
            $.initTable('tableList', screenColumnsArray, screenQueryObject, screenTableUrl);
        }, function (data) {

        });
    }
}

var setIndexPage = function (id) {
    var url = "/v1/api/admin/tag/selectTag?tagId="+id;
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data);
        initTagTile();
    }, function (data) {

    });
}

var initTagTile = function () {
    var url = "/v1/api/admin/tag/findAllTagTitle";
    $.commonAjax(url, 'get','json',{}, function (data) {
        console.log(data.data);

        $(".tagTitleDiv").empty();
        //for(var i=)
        $.each(data.data, function(i, item){
            $(".tagTitleDiv").append('<span class="label label-info">'+item.tagName+'</span>&nbsp; &nbsp;');
        });

    }, function (data) {

    });
}
initTagTile();