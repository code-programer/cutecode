var d = new URLSearchParams(window.location.search).get('d')
function build(data){
    console.log(data)
    document.getElementById("file").value = data.percent;
    document.getElementsByClassName("b")[0].innerHTML = data.title;
}
fetch(d)
  .then((response) => console.log(response))
  .then((data) => build(data));