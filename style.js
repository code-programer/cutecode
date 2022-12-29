function width() {
    var html = document.documentElement;
    var body = document.body;

    var width = Math.max(html.clientWidth, 
        html.scrollWidth, html.offsetWidth, 
        body.scrollWidth, body.offsetWidth);

    return width;
}
window.onload = function(){
    if(width() <= 760){
        document.getElementsByClassName("sp")[0].style.display = "block";
    }
    else{
        document.getElementsByClassName("sp")[0].style.display = "none";
    }
}
window.onresize = function(){window.onload()}