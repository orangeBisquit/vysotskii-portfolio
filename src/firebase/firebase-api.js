import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtdMvqepNL_K1bqiZzsBUthMtH8Jvq-M4",
  authDomain: "vysotskii-portfolio.firebaseapp.com",
  projectId: "vysotskii-portfolio",
  storageBucket: "vysotskii-portfolio.appspot.com",
  messagingSenderId: "915430063527",
  appId: "1:915430063527:web:b8c1155f92457ca03bca82",
  measurementId: "G-DY546Z0S5T",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

const getAssetLink = (base, assetName, extention) => {
  const path = `${base}${assetName}.${extention}`;

  return getDownloadURL(ref(storage, path)).catch((error) => {
    console.log(error);
  });
};

const PROJECTS_IMAGES_BASE = "projects-images/";

export const getProjectImage = (imageName, ext) => {
  return getAssetLink(PROJECTS_IMAGES_BASE, imageName, ext);
};
