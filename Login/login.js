import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");

signupBtn.addEventListener('click', () => {
    window.location.href = "../signup/signup.html";
})

loginBtn.addEventListener('click', () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginUser(email, password);
})

async function loginUser(email, password) {
    const errorMsg = document.getElementById("error-message");
    try {
        console.log("started");
        errorMsg.textContent = "";
        errorMsg.style.display = "none";

        await signInWithEmailAndPassword(auth, email, password);
        console.log("end")
        window.location.href = "../wether.html";
    } catch (error) {
        console.error("unsucessful: " + error);

        errorMsg.textContent = "Password does not match";
        errorMsg.style.display = "block";
    }
}