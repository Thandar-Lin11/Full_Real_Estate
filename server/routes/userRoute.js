import express from "express";
import {
  getAllBookings,
  bookVisit,
  cancelBooking,
  createUser,
  toFav,
  getAllFavorites,
} from "../controllers/userControllers.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFav/:residencyId", toFav);
router.post("/allFav/", getAllFavorites);

export { router as userRoute };
