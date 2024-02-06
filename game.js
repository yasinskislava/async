const gameBox = document.querySelector(".game");
const stats = document.querySelector(".stats");
let c = 0;
let f = false;
function setPosition() {
  gameBox.style.top = `${Math.floor(Math.random() * 637)}px`;
  gameBox.style.left = `${Math.floor(Math.random() * 1437)}px`;
  gameBox.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  f = false;
}
gameBox.addEventListener("click", () => {
  if (f === false) {
    c++;
    stats.innerHTML = `Score: ${c}`;
    f = true;
  }
});
setInterval(setPosition, 750);
