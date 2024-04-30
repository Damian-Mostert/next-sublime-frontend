import { useDatabase } from "../../init";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const validate = (data, rules) => {
  /*  Object.keys(data).map(() => {
      throw new "Invalid key "();
    }); */
  return data;
};

//init db;
var app;
try {
  app = getApp();
} catch (e) {
  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  });
}

const Firestore = {
  database: getFirestore(app),
  auth: getAuth(app),
};

export class FireStoreModel {
  constructor(name, rules) {
    this.collection_name = name;
    this.query = null;
    this.rules = rules;
    this.database = Firestore.database;
  }
  //validate rules
  validate = () => {};
  //call to reset query
  reset = () => {
    this.query = null;
    return this;
  };
  where = (a, b, c) => {
    let last_query = this.query ? this.query : (collection) => collection;
    let new_query = (collection) =>
      query(last_query(collection), where(a, b, c));
    let instance = new FireStoreModel(this.collection_name, this.rules);
    instance.query = new_query;
    return instance; // Return a new instance with the updated query
  };
  update = async (data) => {
    if (!this.query) throw new Error("No query called before update.");
    data = validate(data, this.rules);
    const docs = await this.get();
    const batch = writeBatch(this.database);
    for (const document of docs)
      batch.update(doc(this.database, this.collection_name, document.id), data);
    await batch.commit();
    return this;
  };
  make = async (data) => {
    data = validate(data, this.rules);
    const document = await addDoc(
      collection(this.database, this.collection_name),
      data
    );
    console.log("add", document.id);
    const batch = writeBatch(this.database);
    batch.update(doc(this.database, this.collection_name, document.id), {
      id: document.id,
    });
    await batch.commit();
    this.reset();
    return document.id; // Return this to allow method chaining
  };
  delete = async () => {
    data = validate(data, this.rules);
    const docs = await this.get();
    for (const doc of docs)
      await deleteDoc(
        doc(this.database, "/" + this.collection_name, doc.id),
        data
      );
    return this;
  };
  get = async () => {
    const docs = await getDocs(
      this.query
        ? this.query(collection(this.database, this.collection_name))
        : collection(this.database, this.collection_name)
    );
    const data = [];
    docs.docs.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    this.reset();
    console.log(data);
    return data;
  };
  first = async () => {
    const data = await this.get();
    return data[0];
  };
}

export class FireStoreAuthModel {}
