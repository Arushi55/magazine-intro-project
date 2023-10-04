// responsible for information we store about our user
// username, password, etc.

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    passowrd: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    bio: {type: String, required: false}
}, {
    collection: 'users' //table that stores data, etc. stored in a database
});

const db = mongoose.connection.useDb("users");
const User = db.model("User", UserSchema);

export default User;