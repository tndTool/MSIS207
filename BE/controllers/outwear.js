import { outwearCategory, outwearColor, outwearSize } from "../models/webDB.js";

export const addOutwearCategory = async(req, res) => {
    const outwearCag = req.body;
    try {
        const result = await outwearCategory.create(outwearCag,{raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getOutwearCategory = async (req, res) => {
    try {
        const result = await outwearCategory.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addOutwearColor = async (req, res) => {
    const outwearCol = req.body;
    try {
        const result = await outwearColor.create(outwearCol, {raw: true})
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getOutwearColor = async (req, res) => {
    try {
        const result = await outwearColor.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addOutwearSize = async (req, res) => {
    const outwearSiz = req.body;
    try {
        const result = await outwearSize.create(outwearSiz, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getOutwearSize = async (req, res) => {
    try {
        const result = await outwearSize.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
