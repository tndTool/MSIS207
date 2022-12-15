import { topCategory, topColor, topSize } from "../model/webDB.js";

export const addTopCategory = (req, res) => {
    const topCag = req.body;
    topCategory.create(topCag, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getTopCategory = (req, res) => {
    topCategory.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addTopColor = (req, res) => {
    const topCol = req.body;
    topColor.create(topCol, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getTopColor = (req, res) => {
    topColor.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addTopSize = (req, res) => {
    const topSiz = req.body;
    topSize.create(topSiz, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getTopSize = (req, res) => {
    topSize.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}
