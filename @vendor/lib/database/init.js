"use server";

import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export async function useDatabase() {
  switch (process.env.NEXT_PUBLIC_DATABASE_TYPE) {
    case "FireStore":
      var app;
      try {
        app = getApp();
      } catch (e) {
        app = initializeApp({
          apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
          authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
          messagingSenderId:
            process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
          measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
        });
      }
      return {
        database: getFirestore(app),
        auth: getAuth(app),
      };
    case "Mysql":
      return {
        database,
        auth,
      };
    case "MongoDB":
      return {
        database,
        auth,
      };
  }
}
