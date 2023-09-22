import { signInAnonymously } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#anonimus");

signInForm.addEventListener("click", async () => {

  try {
    const userCredentials = await signInAnonymously(auth)
    console.log(userCredentials.user.uid)

    showMessage("Welcome " + userCredentials.user);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
} );