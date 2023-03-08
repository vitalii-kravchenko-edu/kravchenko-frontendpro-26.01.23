const input = document.getElementById("myInput");
const div = document.getElementById("myDiv");

input.addEventListener("focus", function() {
  div.style.display = "block";
  div.style.display = "inline-block";

});

input.addEventListener("blur", function() {
  div.style.display = "none";
});


