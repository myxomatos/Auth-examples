import { signInWithEmailAndPassword, linkWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#link-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["link-email"].value;
  const password = signInForm["link-password"].value;

  try {
    const credential = EmailAuthProvider.credential(email, password);
    console.log(credential)
    linkWithCredential(auth.currentUser, credential);
    console.log(auth.currentUser)
    console.log(credential)


    // Close the login modal
    const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    modal.hide();

    // reset the form
    signInForm.reset();

    // show welcome message
    showMessage("Welcome account upgraded");
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
});