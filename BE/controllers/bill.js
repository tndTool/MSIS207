import Bill from "../model/billDB.js";

export const createBill = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const city = req.body.city;
    const district = req.body.district;
    const ward = req.body.ward;
    const street = req.body.street;
    const total = req.body.totalPrice;
    const BillID = Date.now();
    //check if input is empty
    if(!name || !email || !phone || !city || !district || !ward || !street) {
        return res.status(400).json("Vui lòng điền đầy đủ thông tin");
    }
    else{
        const bill = new Bill({
            billsID: BillID,
            Name: name,
            Email: email,
            Phone: phone,
            City: city,
            District: district,
            Ward: ward,
            Street: street,
            Total: total,
          });
          bill.save((error, result) => {
            if (error) console.log(error);
            return res.status(200).json(result);
          });
    }
}