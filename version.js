function check_version() {
    var vid = document.getElementById("version_id").innerHTML;
    if(vid != "240624") {
        document.getElementById("updt").innerHTML = "（最新版本 1.1.1）";
        var path = window.location.href;
        document.getElementById("path").innerHTML = path.substring(8, path.length - 11);
        document.getElementById("updtTip").setAttribute("style","");
    } else {
        document.getElementById("updt").innerHTML = "（已是最新版本）";
    }
}

function main() {
    check_version();
    return ;
}

main();