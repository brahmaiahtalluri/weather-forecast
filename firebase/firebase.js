
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA9wiKS-9TEY9nCczBJ3I1X1a9CG6dc9p8",
    authDomain: "weatherapp-64009.firebaseapp.com",
    projectId: "weatherapp-64009",
    storageBucket: "weatherapp-64009.firebasestorage.app",
    messagingSenderId: "382491582684",
    appId: "1:382491582684:web:bd9a55306c10b2e24f1419"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

