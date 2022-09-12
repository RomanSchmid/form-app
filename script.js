const form = document.getElementById("example-form");
const userList = document.querySelector(".user-list");
const empty = document.getElementById("empty");

const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const confirmPasswordError = document.querySelector(".confirm-password-error");
const emailError = document.querySelector(".email-error");

const usernameRegex = new RegExp(".{4,64}$");
const passwordRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,64}$");
const emailRegex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");

const usernameValidation = (username) => {
    if (usernameRegex.test(username)) {
        usernameError.style.display = "none";
        return true;
    } else {
        usernameError.style.display = "block";
    }
}

const passwordValidation = (password) => {
    if (passwordRegex.test(password)) {
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

    /* console.log(event); */

    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;
    let confirmPassword = event.target.elements.confirmPassword.value;
    let email = event.target.elements.email.value;
    let date = event.target.elements.date.value;
 
    let cond1 = usernameValidation(username);
    let cond2 = passwordValidation(password);
    let cond3 = confirmPasswordValidation(password, confirmPassword);
    let cond4 = emailValidation(email);

    // If all conditions are true -> Add an user to the user list
    if (cond1 && cond2 && cond3 && cond4) {
        
        empty.style.display = "none";

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