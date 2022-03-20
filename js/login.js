const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


function handleSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    handleGreeting(username);

}

function handleGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove("hidden");
}


loginForm.addEventListener("submit", handleSubmit);
const savedUserName = localStorage.getItem("username");

if(savedUserName === null) {
    loginForm.addEventListener("submit", handleSubmit);
} else {
    handleGreeting(savedUserName);
}
