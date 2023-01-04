import Employee from "../models/employee.js";

export const getEmployee = async (req, res) => {
    try {
        const data = await Employee.findAll({raw: true})
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error)
    }
};

export const addEmployee = async (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const email = req.body.email;
    const birthday = req.body.birthday;
    const address = req.body.address;

    if(!name || !gender || !phone || !email || !address || !birthday ) {
        return res.status(400).json("Vui lòng điền đầy đủ thông tin");
    }
        else{
        const employee = Employee.build({
            Name: name,
            Gender: gender,
            Phone: phone,
            Email: email,
            Birthday: birthday,
            Address: address,
            });
            try {
            const result = await employee.save()
            return res.status(200).json(result.get({raw: true}));
            } catch (error) {
            console.log(error);
        }
    }
};

