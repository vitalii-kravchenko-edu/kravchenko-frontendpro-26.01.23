// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). 
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

const link1 = {href : "google.com"};
const link2 = {href : "github.com"};
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function() {
  if (!link1.href.includes("http")) {
    link1.href = "http://"+ link1.href;
  }
  window.location.href = link1.href;
})

button2.addEventListener("click", function() {
  if (!link2.href.includes("https")) {
    link2.href = "https://"+ link2.href;
  }
  window.location.href = link2.href;
})