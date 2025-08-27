// app/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getDatabase(app);

export function incrementVisit() {
  if (typeof window === "undefined") return;
  const k = "visit_incremented_session";
  if (sessionStorage.getItem(k)) return;      // only once per tab session
  sessionStorage.setItem(k, "1");

  const visitRef = ref(db, "visits/count");
  return runTransaction(visitRef, (current) => (current || 0) + 1);
}

// returns an unsubscribe function
export function onVisitsChange(cb: (n: number) => void) {
  const visitRef = ref(db, "visits/count");
  const unsub = onValue(visitRef, (snap) => cb(snap.exists() ? snap.val() : 0));
  return unsub;
}

export function formatNumber(num: number) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return String(num);
}

export { app, analytics, db };
