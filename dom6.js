document.getElementById("dawera").onclick = function () {

    var div = document.createElement('div');
    div.style.height = "200px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);
    div.textContent= document.getElementById("name").value;



}
const form = document.querySelector('form');  
   form.addEventListener('submit', function(event) {  
   event.preventDefault(); // Prevents the default form submission behavior  
// Your form submission logic here  
}); 