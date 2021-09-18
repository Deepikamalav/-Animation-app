
var allMoves = [
  { top: "0px", left: "0px" },
  { top: "0px", left: "500px" },
  { top: "500px", left: "500px" },
  { top: "500px", left: "0px" },
];

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
btn.style.margin = "20px";
btn.style.color = "red";
btn.style.border ="1px solid black";
document.body.appendChild(btn);

var btn2 = document.createElement("button");
btn2.innerHTML = "Reverse";
btn2.style.margin = "20px";
btn2.style.color = "blue";
btn2.style.border = "1px solid black";
document.body.appendChild(btn2);

var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.background = "aqua";
div.style.border = "2px solid black";
div.style.color = "black";

div.classList.add("mystyle");
document.body.appendChild(div);
var clicktime = 4;
btn.addEventListener("click", () => {
  clicktime++;

  if (clicktime%4 == 1) {
    div.style.left = "500px";
  } else if (clicktime%4 == 2) {
    div.style.top = "500px";
  } else if (clicktime%4 == 3) {
    div.style.left = "0px";
  } else {
    div.style.top = "0px";
  }
});

// var clicktime = 0;
btn2.addEventListener("click", () => {
  clicktime++;
  if (clicktime%4 == 1) {
    div.style.top = "500px";
  } else if (clicktime%4 == 2) {
    div.style.left = "500px";
  } else if (clicktime%4 == 3) {
    div.style.top = "0px";
  } else {
    div.style.left = "0px";
  }
});