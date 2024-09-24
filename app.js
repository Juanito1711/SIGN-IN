let signUpButton = document.getElementById("sign-up-btn");
let signInButton = document.getElementById("sign-in-btn");
let title = document.getElementById("title");
let nameField = document.getElementById("name-field");

function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
}

signInButton.onclick = function() {
    nameField.classList.add("hidden");
    title.innerHTML = "Sign In";
    setActiveButton(signInButton, signUpButton);
};

signUpButton.onclick = function() {
    nameField.classList.remove("hidden");
    title.innerHTML = "Sign Up";
    setActiveButton(signUpButton, signInButton);
};