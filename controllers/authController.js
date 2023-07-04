import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    // console.log("Hello yes trying to register");
    try {
        console.log(req.body);
        const { name, email, password, phone, address } = req.body;
        // console.log(name);
        // Validation
        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ error: "Email is Required" });
        }
        if (!password) {
            return res.send({ error: "Password is Required" });
        }
        if (!phone) {
            return res.send({ error: "Phone is Required" });
        }
        if (!address) {
            return res.send({ error: "Address is Required" });
        }

        // Existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already Register Please login'

            })
        }

        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save();

        res.status(201).send({
            success: true,
            message: "User Registered Succesfully",
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in Rigisteration"
        })
    }
}