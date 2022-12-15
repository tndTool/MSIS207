import { bottomsCategory, bottomsColor, bottomsSize } from "../model/webDB.js";

export const addBottomsCategory = (req, res) => {
    const bottomsCag = req.body;
    bottomsCategory.create(bottomsCag, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getBottomsCategory = (req, res) => {
    bottomsCategory.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addBottomsColor = (req, res) => {
    const bottomsCol = req.body;
    bottomsColor.create(bottomsCol, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getBottomsColor = (req, res) => {
    bottomsColor.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const addBottomsSize = (req, res) => {
    const bottomsSiz = req.body;
    bottomsSize.create(bottomsSiz, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getBottomsSize = (req, res) => {
    bottomsSize.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}
