function clickAlert() {
  alert("Hee hee, that tickles!");
}

const input = document.getElementById("input");
function addingEventListener() {
  input.addEventListener("click", clickAlert);
}

const main = document.getElementById("main");
main.addEventListener("click", clickAlert);

addingEventListener();
