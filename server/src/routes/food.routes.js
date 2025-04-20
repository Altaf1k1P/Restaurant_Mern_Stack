import { Router } from "express";
import {upload} from "../meddlewares/multer.meddleware.js"
import {addFood, getAllFoodItem, getFoodById, updateFoodItem, deleteFoodItem} from "../controllers/Food.controller.js";

const router = Router();

router.post("/add-food", upload.fields([{ name: "featuredImgUrl", maxCount:1}]), addFood);

router.get("/get-all-food-item",getAllFoodItem)

router.get("/food/:foodId", getFoodById)
router.patch("/update-food/:foodId", updateFoodItem)
router.delete("/delete-food/:foodId",deleteFoodItem)
// router.delete("/delete-all-food", deleteALLFoodItem)

export default router;
