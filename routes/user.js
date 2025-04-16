import { Router } from "express";
import { registerUser, logInUser, logOutUser, getProfile, updateProfile } from "../controller/user.js";
import { isAuthenticated } from "../middleware/authenticator.js";


const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', logInUser);
userRouter.post('/logout', logOutUser);
userRouter.get('/profile', isAuthenticated, getProfile);
userRouter.patch('/profile', isAuthenticated, updateProfile);


export default userRouter;