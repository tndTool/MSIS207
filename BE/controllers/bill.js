import Bill from "../models/billDB.js";

export const createBill = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const city = req.body.city;
    const district = req.body.district;
    const ward = req.body.ward;
    const street = req.body.street;
    const total = req.body.totalPrice;
    const BillID = Date.now();
    const ProductName = req.body.productName;
    //check if input is empty
    if(!name || !email || !phone || !city || !district || !ward || !street) {
        return res.status(400).json("Vui lòng điền đầy đủ thông tin");
    }
    else{
        const bill = Bill.build({
            billsID: BillID,
            Name: name,
            Email: email,
            Phone: phone,
            City: city,
            District: district,
            Ward: ward,
            Street: street,
            Total: total,
            Status: "Đang xử lí",
            Product: ProductName
          });
          try {
            const result = await bill.save()
            return res.status(200).json(result.get({raw: true}));
          } catch (error) {
            console.log(error);
          }
    }
};

export const getAll = async (req, res) => {
  try {
    const getdata = await Bill.findAll({raw: true});
    return res.status(200).json(getdata);
  } catch (error) {
    return res.status(400).json(error);
  }
};