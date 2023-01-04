import Product from "../models/product.js";

export const productController = async (req, res) => {
  try {
    const getdata = await Product.findAll({raw: true});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  console.log(req.body);
  const id = req.body
  try {
    const data = await Product.destroy({where: {id: id}}, {raw: true})
    console.log("data", data)
    return res.status(200).json(data);
  } catch (error) {
    console.log("error", error)
    return res.status(400).json(error);
  }
}