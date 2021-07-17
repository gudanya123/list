
var opt = 0;
var data = null;
$(function(){
    $.getJSON("/json",function(data2){
        data = data2;
    })
});
var json = [
    {
        butContent:"百度一下",
        link:"https://www.baidu.com/s?wd="
    },
    {
        butContent:"github搜索",
        link:"https://github.com/search?q="
    },
    {
        butContent:"京东搜索",
        link:"https://search.jd.com/Search?keyword="
    },
    {
        butContent:"淘宝搜索",
        link:"https://list.tmall.com/search_product.htm?q="
    },
    {
        butContent:"当当图书",
        link:"http://search.dangdang.com/?key="
    },
    {
        butContent:"B站搜索",
        link:"https://search.bilibili.com/all?keyword="
    },
    {
        butContent:"搜快手",
        link:"https://video.kuaishou.com/search/video?searchKey="
    },
    {
        butContent:"腾讯视频",
        link:"https://v.qq.com/x/search/?q="
    },
    {
        butContent:"爱奇艺",
        link:"https://so.iqiyi.com/so/q_"
    },
    {
        butContent:"芒果tv",
        link:"https://so.mgtv.com/so?lastp=ch_home&k="
    },
    {
        butContent:"小说",
        link:"https://www.qidian.com/search?kw="
    },
    {
        butContent:"漫画",
        link:"https://www.soman.com/search.html?keyword="
    },
    {
        butContent:"微信文章",
        link:"https://weixin.sogou.com/weixin?type=2&query="
    },
    {
        butContent:"知乎文章",
        link:"https://www.zhihu.com/search?q="
    },
    {
        butContent:"CSDN文章",
        link:"https://so.csdn.net/so/search?q="
    },
    {
        butContent:"CSDN下载",
        link:"https://so.csdn.net/so/search?t=doc&u=&q="
    }
];

var inputVal = null;
function changeForm(val){
    opt = val;
    document.getElementById("so").value= json[opt].butContent;
    document.getElementById("soInput").focus();
}

function start(){
    window.location.href = json[opt].link+inputVal;
}

function calAge(e){
    var evt = window.event || e;
    if (evt.keyCode == 13) {
        start();
    }
}