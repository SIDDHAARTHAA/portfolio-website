import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSG_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getDatabase(app);

// Increment visits and return current count
export async function incrementVisit() {
  const visitRef = ref(db, "visits/count");
  const snapshot = await get(visitRef);
  const current = snapshot.exists() ? snapshot.val() : 0;
  await set(visitRef, current + 1);
  return current + 1;
}

// Listen for live updates
export function onVisitsChange(callback: (count: number) => void) {
  const visitRef = ref(db, "visits/count");
  onValue(visitRef, (snapshot) => {
    if (snapshot.exists()) callback(snapshot.val());
  });
}

export { app, analytics, db };
