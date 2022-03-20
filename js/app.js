let rangeNumber = document.querySelector("#range-number");
let chooseNumber = document.querySelector("#choose-number");
let randomNumber = document.querySelector("#random-number");
let inFo= document.querySelector("#info");
let inFo2= document.querySelector("#info2");

function handleRange(event) {
  event.preventDefault(event);
  let userRangeNumber = parseInt(rangeNumber.value);
  localStorage.setItem("rangenumber", userRangeNumber);
}  

function handleChoose(event) {
  event.preventDefault();
  let userChooseNumber = parseInt(chooseNumber.value);
  localStorage.setItem("choosenumber", userChooseNumber);
}  
 
function handleResult1() {
  inFo.innerHTML = `You chose: ${localStorage.getItem("choosenumber")}, the machine chose: ${Math.ceil(Math.random() * localStorage.getItem("rangenumber"))}`;
  inFo.classList.remove("hidden");

}

function handleResult2() {
let a = parseInt(chooseNumber.value);
let b = Math.ceil(Math.random() * localStorage.getItem("rangenumber"));  

if(a === b) {
  inFo2.innerHTML = `You won`;
} else {
  inFo2.innerHTML = `You lost`;
}
  inFo2.classList.remove("hidden");
}


  randomNumber.addEventListener("submit", handleRange);
  randomNumber.addEventListener("submit", handleChoose);
  randomNumber.addEventListener("submit", handleResult1);
  randomNumber.addEventListener("submit", handleResult2);
  

  
