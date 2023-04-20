import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBNj5Zf5j5vCi1xaSEk8m1CwOxQzRKuwq0",
  authDomain: "filestorage-99eb8.firebaseapp.com",
  projectId: "filestorage-99eb8",
  storageBucket: "filestorage-99eb8.appspot.com",
  messagingSenderId: "16904094773",
  appId: "1:16904094773:web:b3fb874a268fbbe31e5d7c",
  measurementId: "G-813E885XT3"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
