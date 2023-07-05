import JWT from 'jsonwebtoken';

// Protected Routes Token Base
export const requireSignIn = async (req, res, next) => {
    try {
        const decde = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    }
    catch (error) {
        console.log(error);
    }
}