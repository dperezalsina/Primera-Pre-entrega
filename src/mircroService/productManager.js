
import { product } from "../models/product.js";

export class productManager{
    constructor (){
        this.products = []
    }

    getAll(){
        return this.products
    }

    add(title, description, code, price, status, stock, category, thumbnails){
        const nuevoProduct = new product(title, description, code, price, status, stock, category, thumbnails)
        this.products.push(nuevoProduct)
        return nuevoProduct
    }
}

const nuevo = new productManager()
nuevo.getAll()


nuevo.add("david", "the best", "fast", 58, true, 6, "la mejor", "../get")


console.log(nuevo)