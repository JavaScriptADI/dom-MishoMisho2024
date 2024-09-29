document.getElementById("text").onclick = function () {

    var div = document.createElement('div');
    div.style.height = "200px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);
    div.textContent= "hello World";


}