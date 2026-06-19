import { getAnalytics } from "firebase/analytics";
import { type FirebaseApp,getApp, getApps, initializeApp } from "firebase/app";
import {
  type Database,
  getDatabase,
  onValue,
  ref,
  runTransaction,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId &&
    firebaseConfig.databaseURL
);

let firebaseApp: FirebaseApp | null = null;
let db: Database | null = null;

function getFirebaseDb() {
  if (typeof window === "undefined" || !hasFirebaseConfig) {
    return null;
  }

  if (!firebaseApp) {
    firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

    if (firebaseConfig.measurementId) {
      getAnalytics(firebaseApp);
    }
  }

  if (!db) {
    db = getDatabase(firebaseApp);
  }

  return db;
}

export function incrementVisit() {
  const database = getFirebaseDb();

  if (!database) {
    return;
  }

  const key = "visit_incremented_session";

  if (sessionStorage.getItem(key)) {
    return;
  }

  sessionStorage.setItem(key, "1");

  const visitRef = ref(database, "visits/count");
  return runTransaction(visitRef, (current) => (current || 0) + 1);
}

export function onVisitsChange(cb: (count: number) => void) {
  const database = getFirebaseDb();

  if (!database) {
    cb(0);
    return () => undefined;
  }

  const visitRef = ref(database, "visits/count");
  return onValue(visitRef, (snapshot) =>
    cb(snapshot.exists() ? snapshot.val() : 0)
  );
}

export function formatNumber(num: number) {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }

  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }

  return String(num);
}
