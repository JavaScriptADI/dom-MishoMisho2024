
//1
function log() {
    console.log('Clicked');
  };


//2
function myFunction() {
  document.getElementById("dawera").style.backgroundColor = "red";
}


//3
function myFunction() {
  document.getElementById("dawera").style.backgroundColor = "red";
  dawera.textContent = "Clicked";

}
//4

function myFunction() {
  document.getElementById("dawera").style.backgroundColor = "red";

  console.log(document.getElementById("name").value);

}
//5
document.getElementById("text").onclick = function () {

  var div = document.createElement('div');
  div.style.height = "200px";
  div.style.backgroundColor = "red";
  document.body.appendChild(div);
  div.textContent= "hello World";


}
//6
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

//7

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





