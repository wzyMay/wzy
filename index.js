window.onload=function(){
    //获取鼠标滑过或点击的标签和要切换内容的元素
    var lis = document.getElementById("city").getElementsByTagName("li");
    var div = document.getElementById("text").getElementsByTagName("div");
    var city = document.getElementById("city");
    var timer = null;
    var index=0;
    //遍历标签li，鼠标点击切换
    if(lis.length!=div.length){return;}
    for(var i=0;i<lis.length;i++){
        lis[i].id = i;
        lis[i].onmouseover=function(){
            clearInterval(timer);
            change(this.id);
        }
        lis[i].onmouseout=function(){
            timer=setInterval(auto,2000);
        }
    }
    //避免定时器一直调用
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    //自动切换，调用定时器函数
    timer=setInterval(auto,2000);
    //定时器函数
    function auto(){
        index++;
        if(index>=lis.length){
            index=0;
        }
        change(index);
    }
    //切换函数
    function change(curindex){
        //清除所有li上的class
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            div[j].style.display="none";
        }
        //设置当前为高亮显示
        lis[curindex].className="on";
        div[curindex].style.display="block";
        index = curindex;
    }
}