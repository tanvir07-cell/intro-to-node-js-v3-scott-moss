// eikhane sob file system gula thakbe karon ei logic gulay ami use korbo command.js er moddeh
import fs from "node:fs/promises";
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

// or , DB_PATH = "../db.json"

export const getDB = async () => {
  try {
    const getdb = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(getdb);
  } catch (err) {
    console.log(err);
  }
};

export const saveDB = async (db) => {
  try {
    // null and 2 er means hocceh je db.json e data add hooar time e 2 ta space diye data add hobe:
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
  } catch (err) {
    console.log(err);
  }
};

// ei function ti append er moto kaaj korbe mane e db.json e note gula append korbe:

export const insert = async (data) => {
  const db = await getDB();
  db.notes.push(data);
  await saveDB(db);
  return data;
};
