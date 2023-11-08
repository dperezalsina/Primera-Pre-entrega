import { Router } from "express";
import { productManager } from "../mircroService/productManager.js";

const manag = new productManager();

export const productsRouter = Router();

productsRouter.get('/', (req, res)=>{
    const seeAll = manag.getAll()
    res.json(seeAll)
})