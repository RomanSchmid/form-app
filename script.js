const form = document.getElementById("example-form");
const userList = document.querySelector(".user-list");
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const emailError = document.querySelector(".email-error");

const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

const usernameValidation = (username) => {
    if (username.length >= 4 && username.length <= 64) {
        usernameError.style.display = "none";
        return true;
    } else {
        usernameError.style.display = "block";
    }
}

const passwordValidation = (password) => {
    if (password.length >= 8 && password.length <= 64) {
        passwordError.style.display = "none";
        return true;
    } else {
        passwordError.style.display = "block";
    }
}

const confirmPasswordValidation = (password, confirmPassword) => {
    if (password === confirmPassword) {
        confirmPasswordError.style.display = "none";
        return true;
    } else {
        confirmPasswordError.style.display = "block";
    }
}

const emailValidation = (email) => {
    if (emailRegex.test(email)) {
        emailError.style.display = "none";
        return true;
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", (event) => {
    // Turn off page refreshing after every form submiting
    event.preventDefault();
    console.log(event);
    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;
    let confirmPassword = event.target.elements.confirmPassword.value;
    let email = event.target.elements.email.value;
    let date = event.target.elements.date.value;
    /* console.log(username);
    console.log(password);
    console.log(confirmPassword);
    console.log(email);
    console.log(date); */
    let cond1 = usernameValidation(username);
    let cond2 = passwordValidation(password);
    let cond3 = confirmPasswordValidation(password, confirmPassword);
    let cond4 = emailValidation(email);

    if (cond1 && cond2 && cond3 && cond4) {
        let newUser = document.createElement("p");
        newUser.textContent = `${username} - ${email} - ${date}`;

        userList.appendChild(newUser);

        event.target.elements.username.value = "";
        event.target.elements.password.value = "";
        event.target.elements.confirmPassword.value = "";
        event.target.elements.email.value = "";
        event.target.elements.date.value = "";
    }
})