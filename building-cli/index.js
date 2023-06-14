#!/usr/bin/env node

// taking input using console:
const notes = process.argv[2];

const createNote = {
  content: notes,
  id: Date.now(),
};

console.log(createNote);
