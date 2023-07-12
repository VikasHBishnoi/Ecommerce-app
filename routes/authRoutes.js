import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
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

//Test routes to test this just used token genrated in header and key as autherization in postman
routers.get('/test', requireSignIn, isAdmin,testController);

// Continue from 2:01:00
// :-)
export default routers;
