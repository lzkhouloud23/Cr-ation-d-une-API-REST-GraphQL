const crypto = require('crypto');
const dbPromise = require('./db');
const toJson = (doc) => (doc ? doc.toJSON() : null);
module.exports = {
 user: async ({ id }) => {
 const db = await dbPromise;
 const doc = await db.users.findOne(id).exec();
 return toJson(doc);
 },
 users: async () => {
 const db = await dbPromise;
 const docs = await db.users.find().exec();
 return docs.map((doc) => doc.toJSON());
 },
 addUser: async ({ name, email, password }) => {
 const db = await dbPromise;
 const user = await db.users.insert({
 id: crypto.randomUUID(),
 name,
 email,
 password
 });
 return user.toJSON();
 },
 updateUser: async ({ id, name, email, password }) => {
 const db = await dbPromise;
 const doc = await db.users.findOne(id).exec();
 if (!doc) return null;
 const updatedDoc = await doc.incrementalPatch({
 name,
 email,
 password
 });
 return updatedDoc.toJSON();
 },
 deleteUser: async ({ id }) => {
 const db = await dbPromise;
 const doc = await db.users.findOne(id).exec();
 if (!doc) return false;
 await doc.remove();
 return true;
 }
};