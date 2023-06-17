// db.js holo generic database. eikhane db.json er moddeh jodi notes add korte chai taholeo kaaj korbe abr jodi db.json er moddeh user o add korte chai taholeo kaaj korbe:

// tai shudu notes add korar jonne ei notes.js file use korechi:
import shortid from "shortid";
import { getDB, insert, saveDB } from "./db.js";

// create a note:
export const newNote = async (note, tags = []) => {
  const newNote = {
    id: shortid.generate(),
    tags: tags,
    content: note,
  };
  await insert(newNote);
  return newNote;
};

// get all notes:
export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

// get a note by id:
export const findNoteById = async (id) => {
  const { notes } = await getDB();
  return notes.find((note) => note.id.includes(id));
};

// delete a note by id:
export const removeNoteById = async (id) => {
  const { notes } = await getDB();
  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await saveDB({ notes: newNotes });
    return id;
  }
};

// remove all notes:
export const removeAllNotes = async () => {
  await saveDB({ notes: [] });
};
