import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const init = () => {
  initializeApp(firebaseConfig);
};
export default init;
