
//ეს არ მუშაობს//
//მერვე არმაქ//
document.getElementById("dawera").onclick = function () {

    var div = document.createElement('div');

    div.style.height = "200px";
    div.style.backgroundColor = "red";
    document.body.appendChild(div);
    div.textContent= document.getElementById("name").value;
    div.id = "myUniqueId";



}
const form = document.querySelector('form');  
   form.addEventListener('submit', function(event) {  
   event.preventDefault();
}); 


document.getElementById("myUniqueId").onclick = function () {
   myUniqueId.style.backgroundColor ="black";

  }
  