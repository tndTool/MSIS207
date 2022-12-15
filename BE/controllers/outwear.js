import { outwearCategory, outwearColor, outwearSize } from "../model/webDB.js";

export const addOutwearCategory = (req, res) => {
    const outwearCag = req.body;
    outwearCategory.create(outwearCag, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getOutwearCategory = (req, res) => {
    outwearCategory.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addOutwearColor = (req, res) => {
    const outwearCol = req.body;
    outwearColor.create(outwearCol, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getOutwearColor = (req, res) => {
    outwearColor.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addOutwearSize = (req, res) => {
    const outwearSiz = req.body;
    outwearSize.create(outwearSiz, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getOutwearSize = (req, res) => {
    outwearSize.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}
