import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    // console.log("Hello yes trying to register");
    try {
        console.log(req.body);
        const { name, email, password, phone, address, role } = req.body;
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
        const user = await new userModel({ name, email, phone, address, password: hashedPassword, role }).save();

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

// Post Login
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or pasword"
            })
        }

        // checking user Exist or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "check creditential"
            })
        }

        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).send({
            success: "True",
            message: "Sucessful login",
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in login",
            err
        })
    }
};


// Test Controller
export const testController = (req, res) => {
    res.send("protected routes");
}