// app.js
import { auth, db } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// زر تسجيل الدخول بجوجل
const googleSignInBtn = document.getElementById("googleSignInBtn");

if (googleSignInBtn) {
  googleSignInBtn.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName,
          createdAt: serverTimestamp()
        });
      }

      window.location.href = "profile.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// زر تسجيل الخروج (في صفحة البروفايل)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        try {
          await signOut(auth);
          window.location.href = "index.html"; // يرجع المستخدم للصفحة الرئيسية
        } catch (error) {
          alert("حدث خطأ أثناء تسجيل الخروج: " + error.message);
        }
      });
    }
  }
});
