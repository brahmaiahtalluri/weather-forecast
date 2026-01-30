import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

console.log("signup page");

const signupBtn = document.getElementById("signup-btn");
let email = document.getElementById("email");
const password = document.getElementById("password");
let messageEmail = document.getElementById("message-email");
let messagePassword = document.getElementById("message-password");
let confirmPassword = document.getElementById("confirmPassword");
let messageConfirmPassword = document.getElementById("message-confirm-password");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

email.addEventListener("keyup", () => {
    if (!emailRegex.test(email.value.trim())) {
        messageEmail.textContent = "Invalid email";
        return;
    }
    else {
        messageEmail.textContent = " ";
    }
})

password.addEventListener("keyup", () => {
    if (!passwordRegex.test(password.value)) {
        messagePassword.textContent = "Invalid password";
        return;
    }
    else {
        messagePassword.textContent = "";
    }
})

confirmPassword.addEventListener("keyup", () => {
    if (password.value !== confirmPassword.value) {
        messageConfirmPassword.textContent = " password should be same";
    } else {
        messageConfirmPassword.textContent = "";
    }
})


signupBtn.addEventListener("click", () => {
    registerUser(email.value.trim(), password.value);
})

async function registerUser(email, password) {
    try {
        console.log("Started")
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration sucessfull");
        console.log("end")
        window.location.href = "../Login/index.html";
    } catch (error) {
        console.log("Registration is unsucessful")
        alert("Registration is unsucessful");
    }
}