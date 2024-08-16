import { Router } from "express";
import {createReview, deleteReview, getcurrentUser, getMovieWithDetails, getMovieWithReviews, registerUser, updateReview} from '../contollers/users.controller.js'
import { loginUser } from "../contollers/users.controller.js";
import authenticateToken from "../middlewares/authenticateToken.js";

const router = Router();

router.route("/register").post( registerUser)
router.route("/login").post(loginUser)
router.route("/currentuser").get(authenticateToken,getcurrentUser)
router.route("/deletereview").post(authenticateToken,deleteReview)
router.route("/updatereview").post(authenticateToken,updateReview)
router.route("/getmoviewithreviews").post(authenticateToken,getMovieWithReviews)
router.route("/createreview").post(authenticateToken,createReview)
router.route("/movies").get(getMovieWithDetails)






export default router 