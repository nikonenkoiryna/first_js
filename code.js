var element = document.getElementById("my_button");
var box = document.getElementById("box");
element.onclick = function(event) {
  box.innerHTML = "Change";
}