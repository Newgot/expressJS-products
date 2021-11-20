import {products} from "../datas.js";
import {str} from "../languages/string.js"

export const getProducts = (req, res) => {
    res.render('index', {products, str})
}