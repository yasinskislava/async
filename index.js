//////////////////////////////////
let c = 0;
function showMessage() {
  console.log("Message");
  c++;
  if (c === 5) {
    clearInterval(task1);
  }
}
const task1 = setInterval(showMessage, 1000);

//////////////////////////////////

const box = document.getElementById("box");
const text = document.getElementById("text");
let v = 0;
function changeSize() {
  if (v % 2 == 0) {
    box.style.width = "200px";
    box.style.height = "200px";
  } else {
    box.style.width = "80px";
    box.style.height = "80px";
  }
  v++;
}
let b = 0;
function changeFont() {
  if (b % 2 == 0) {
      text.style.fontSize = "30px";
  } else {
      text.style.fontSize = "15px";
  }
  b++;
}
const task2_1 = setInterval(changeSize, 2000);
const task2_2 = setInterval(changeFont, 2000);

///////////////////////////////////////////////

const time = prompt("Seconds: ");
function alertMessage() {
    alert("Message");
}
setTimeout(alertMessage, time*1000);

