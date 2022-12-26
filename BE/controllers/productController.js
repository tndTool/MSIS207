import Product from "../model/product.js";

export const productController = async (req, res) => {
  await Product.find((err,data) => {
    if(err){
      res.status(500).send(err);
  } else {
      res.status(201).send(data);
  }
  });
  // res.json(products); 
};