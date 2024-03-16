function check() {
    var W = window.innerWidth;
    var H = window.innerHeight;
    if(W < 1344 || H < 724) {
        document.getElementById("mainwindow").setAttribute("style","display:none");
        document.getElementById("window_sz").setAttribute("style","");
        document.getElementById("tip_of_size").innerHTML = "当前窗口大小：" + W + "px * " + H + "px";
    } else {
        document.getElementById("mainwindow").setAttribute("style","");
        document.getElementById("window_sz").setAttribute("style","display:none");
    }
    return ;
}

function main() {
    setInterval(check, 100);
    return ;
}

main();

// 1344
// 712