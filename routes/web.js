import {Router} from "express";
import {getProducts} from "../controllers/productController.js";

export const routerWeb = Router()

routerWeb.get('/', getProducts)

