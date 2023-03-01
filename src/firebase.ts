// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
// import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
// import { getAuth, Auth, connectAuthEmulator } from "firebase/auth";
import { Firestore, getFirestore, collection } from "firebase/firestore";
import { DocumentData, CollectionReference } from "firebase/firestore";
// import { connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGVV08TBHl3S7EjLlkpnA_xER5gdz_d8E",
  authDomain: "marcosluiz.firebaseapp.com",
  projectId: "marcosluiz",
  storageBucket: "marcosluiz.appspot.com",
  messagingSenderId: "2539435650",
  appId: "1:2539435650:web:87810fe39965290d31669b",
  measurementId: "G-5120WNQ6NF",
};

export type Firebase = {
  app: FirebaseApp;
  // analytics?: Promise<Analytics | null>;
  // auth: Auth;
  db: Firestore;
};

const getFirebase: () => Firebase = () => {
  let app: FirebaseApp;
  const apps = getApps();
  app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

  // Retrieve Firebase Analytics instances
  // let analytics: Promise<Analytics | null> | undefined;
  // analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

  // Initialize Firebase Authentication and get a reference to the service
  // const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const env = process.env.NODE_ENV;
  if (env === "development") {
    // connectAuthEmulator(auth, "http://localhost:9099");
    // connectFirestoreEmulator(db, "localhost", 8080);
  }

  // return { app, analytics, auth, db };
  return { app, db };
};

export default getFirebase;

// This is just a helper to add the type to the db responses
export const createCollection = <T = DocumentData>(
  db: Firestore,
  collectionPath: string
) => {
  return collection(db, collectionPath) as CollectionReference<T>;
};
