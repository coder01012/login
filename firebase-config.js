const firebaseConfig = {
  apiKey: "ضع-مفتاح-API-هنا",
  authDomain: "اسم-المشروع.firebaseapp.com",
  projectId: "معرّف-المشروع",
  appId: "معرّف-التطبيق"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
