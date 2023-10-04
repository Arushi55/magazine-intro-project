// contains all methods responsible for responding to the different interactions a user can have with the site
import User from "../models/user.js";
import Connection from "../db/connection.js";

export default class UserController {
    static async getAllUsers(req, res) {
        /////////////////////////////////
        /*   Connect to the database   */
        /////////////////////////////////
        await Connection.open("users");

        const users = [];
        try {
            for await (const doc of User.find()) {
                users.push(doc);
            }
        } catch (e) {
            throw e;
        }

        res.json(users);
    }
}