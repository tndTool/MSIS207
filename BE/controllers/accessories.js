import { accessoriesCategory, accessoriesColor, accessoriesSize } from "../model/webDB.js";

export const addAccessoriesCategory = (req, res) => {
    const accessoriesCag = req.body;
    accessoriesCategory.create(accessoriesCag, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
            console.log(data);
        }
    })
}

export const getAccessoriesCategory = (req, res) => {
    accessoriesCategory.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
}

export const addAccessoriesColor = (req, res) => {
    const accessoriesCol = req.body;
    accessoriesColor.create(accessoriesCol, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
}

export const getAccessoriesColor = (req, res) => {
    accessoriesColor.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addAccessoriesSize = (req, res) => {
    const accessoriesSiz = req.body;
    accessoriesSize.create(accessoriesSiz, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getAccessoriesSize = (req, res) => {
    accessoriesSize.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}
