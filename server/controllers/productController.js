import Product from "../model/product.js";

export const productController = async (req, res) => {
  try {
    const getdata = await Product.findAll({raw: true});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.body.id
  try {
    await Product.destroy({where: {id: id}}, {raw: true})
    const data = await Product.findAll({raw: true});
    return res.status(200).send(data);
  } catch (error) {
    console.log("error", error)
    return res.status(400).json(error);
  }
};

export const addProduct = async (req, res) => {
  
    const title = req.body.title;
    const price = req.body.price;
    const image01 = req.body.image01;
    const image02 = req.body.image02;
    const categorySlug = req.body.categorySlug;
    const colors = req.body.colors;
    const slug = req.body.slug;
    const size = req.body.size;
    const category = req.body.category;
    const description = req.body.description;

    if(!title || !price || !image01 || !image02 || !categorySlug || !colors || !slug || !size || !category || !description) {
      return res.status(400).json("Vui lòng điền đầy đủ thông tin");
  }
   else{
      const product = Product.build({
          Title: title,
          Price: price,
          Image01: image01,
          Image02: image02,
          CategorySlug: categorySlug,
          Colors: colors,
          Slug: slug,
          Size: size,
          Category: category,
          Description: description,
        });
        try {
          const result = await product.save()
          return res.status(200).json(result.get({raw: true}));
        } catch (error) {
          console.log(error);
        }
  }
}