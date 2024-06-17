import { createApp } from "vue";
import "./assets/general.css";
import "./assets/style.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";

import BaseSpiner from "./components/UI/BaseSpiner.vue";
import BasePagination from "./components/UI/BasePagination.vue";

import router from "./router.js";
import store from "./store/index.js";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyASWeOcmG4iCzullxMmn7pTlr7aMG8rsZw",
//   authDomain: "recipe-cooking-app.firebaseapp.com",
//   projectId: "recipe-cooking-app",
//   storageBucket: "recipe-cooking-app.appspot.com",
//   messagingSenderId: "957678178698",
//   appId: "1:957678178698:web:daa11bc55ff056c23ff873",
//   measurementId: "G-L3XRTBN8WK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.component("base-spiner", BaseSpiner);
app.component("base-pagination", BasePagination);

app.use(store);
app.use(router);
app.mount("#app");
