function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => window.location.href = "welcome.html")
    .catch(e => alert(e.message));
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "welcome.html")
    .catch(e => alert(e.message));
}

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(() => window.location.href = "welcome.html")
    .catch(e => alert(e.message));
}
