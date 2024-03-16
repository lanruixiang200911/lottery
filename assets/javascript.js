Array.prototype.deleteValue = function(value){
    var i = 0;
    for(i in this){
        if(this[i] == value) break;
    }
    return this.slice(0, i).concat(this.slice(parseInt(i, 10) + 1));
}
var names = new Array(
    "陈晟","陈若曦","何俊谕","金凌玉",
    "兰瑞翔","李林峰","李翘楚","连昌华",
    "骆绎臣","孙心怡","陶和景","王雨嘉",
    "吴晨鑫","张允浩","郑宇豪","朱政元","朱梓萱"
);
var N = 17;
var outnames, outN;
function initout() {
    outnames = names;
    outN = N;
}
function updateRange() {
    var Ran = "";
    for(var i = 0; i < outN; i++) {
        Ran += "<li>" + outnames[i] + "</li>\n";
    }
    document.getElementById("Range").innerHTML=Ran;
}
function rand(){
    document.getElementById("list").innerHTML="";
    document.getElementById("mistake").innerHTML="";

    for(var i=1;i<=29;i++){
        setTimeout(()=>{
            document.getElementById("randuser").innerHTML=names[Math.floor(Math.random()*N)];
        },i*60);
    }

    setTimeout(()=>{
        var tmp = outnames[Math.floor(Math.random()*outN)];
        document.getElementById("randuser").innerHTML = tmp;
        outnames = outnames.deleteValue(tmp);
        outN--;
        updateRange();
        if(outN == 0) {
            re_init_by_empty();
        }
    },30*60);

    document.getElementById("now_start1").setAttribute("onclick","worry()");
    document.getElementById("now_start1").setAttribute("style","opacity:0.6;");
    document.getElementById("now_start2").setAttribute("onclick","worry()");
    document.getElementById("now_start2").setAttribute("style","opacity:0.6;");
    setTimeout(()=>{
        document.getElementById("now_start1").setAttribute("onclick","rand()");
        document.getElementById("now_start1").setAttribute("style","");
        document.getElementById("now_start2").setAttribute("onclick","rand2()");
        document.getElementById("now_start2").setAttribute("style","");
    },30*60);
}

function rand2(){
    document.getElementById("list").innerHTML="";

    var times = document.getElementById("times").value;
    if(isNaN(parseFloat(times))){
        document.getElementById("mistake").innerHTML="<span class=\"wrong\">请输入一个 2 ~ 10 的整数</span>";
    }else{
        var o=Number(times);
        if(o%1!==0){
            document.getElementById("mistake").innerHTML="<span class=\"wrong\">请输入一个 2 ~ 10 的整数</span>";
        }else if(o<2||o>10){
            document.getElementById("mistake").innerHTML="<span class=\"wrong\">请输入一个 2 ~ 10 的整数</span>";
        }else{
            document.getElementById("mistake").innerHTML="";

            for(var t=1;t<=times;t++){
                var out="";
                setTimeout(() => {
                    for(var i=1;i<=29;i++){
                        setTimeout(()=>{
                            var tmp=names[Math.floor(Math.random()*N)];
                            document.getElementById("randuser").innerHTML=tmp;
                        },i*60);
                    }

                    setTimeout(()=>{
                        var tmp=outnames[Math.floor(Math.random()*outN)];
                        document.getElementById("randuser").innerHTML=tmp;
                        out+="<li>"+tmp+"</li>\n";
                        document.getElementById("list").innerHTML="<ul>\n"+out+"</ul>";
                        outnames = outnames.deleteValue(tmp);
                        outN--;
                        updateRange();
                        if(outN == 0) {
                            re_init_by_empty();
                        }
                    },30*60);

                },(t-1)*(30*60+500));
            }

            document.getElementById("now_start1").setAttribute("onclick","worry()");
            document.getElementById("now_start1").setAttribute("style","opacity:0.6;");
            document.getElementById("now_start2").setAttribute("onclick","worry()");
            document.getElementById("now_start2").setAttribute("style","opacity:0.6;");
            setTimeout(()=>{
                document.getElementById("now_start1").setAttribute("onclick","rand()");
                document.getElementById("now_start1").setAttribute("style","");
                document.getElementById("now_start2").setAttribute("onclick","rand2()");
                document.getElementById("now_start2").setAttribute("style","");
            },(30*60+500)*times-500);
        }
    }
}

function donate(){
    location.href = "./donate.html";
}

function worry(){
    var t=document.getElementById("worry").innerHTML;
    if(t==""){
        document.getElementById("worry").innerHTML="<span class=\"wrong\">请不要疯狂点击按钮哟~</span>";
        setTimeout(() => {
            document.getElementById("worry").innerHTML="";
        },1500);
    }
}

function re_init() {
    initout();
    updateRange();
    var t=document.getElementById("ReInit").innerHTML;
    document.getElementById("button_reinit").setAttribute("onclick","");
    document.getElementById("button_reinit").setAttribute("style","opacity:0.6;");
    setTimeout(() => {
        document.getElementById("button_reinit").setAttribute("onclick","re_init()");
        document.getElementById("button_reinit").setAttribute("style","");
    }, 50);
    if(t == ""){
        document.getElementById("ReInit").innerHTML=" (已重置) ";
        setTimeout(() => {
            document.getElementById("ReInit").innerHTML="";
        }, 2000);
    }
}

function re_init_by_empty() {
    initout();
    updateRange();
    document.getElementById("ReInit").innerHTML=" (已自动重置) ";
    setTimeout(() => {
        document.getElementById("ReInit").innerHTML="";
    }, 2000);
}