import Product from "../models/product.js";

export const productController = async (req, res) => {
  try {
    const getdata = await Product.find({});
    // console.log(getdata);
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(400).json(error);
  }
  // res.json(products); 
};