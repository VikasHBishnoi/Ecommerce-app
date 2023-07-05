import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
// routers object
const routers = express.Router();

// routing
// REGISTER || METHOD POST

// To test below use this
// {
//     "name": "TEST",
//     "email":"test@mail.com",
//     "password":"test@password",
//     "phone": "123456789",
//     "address": "Jodhpur",
//     "role": 0
// }
routers.post('/register', registerController);

// To test login use below in postman
// {
//     "email":"test@mail.com",
//     "password":"test@password"
// }
routers.post('/login', loginController);

//Test routes
routers.get('/test', requireSignIn, testController);

export default routers;
