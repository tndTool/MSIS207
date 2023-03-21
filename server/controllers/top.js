import { topCategory, topColor, topSize } from "../model/webDB.js";

export const addTopCategory = async (req, res) => {
    const topCag = req.body;
    try {
        const result = await topCategory.create(topCag, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTopCategory = async (req, res) => {
    try {
        const result = await topCategory.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addTopColor = async (req, res) => {
    const topCol = req.body;
    try {
        const result = await topColor.create(topCol, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTopColor = async (req, res) => {
    try {
        const result = await topColor.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addTopSize = async (req, res) => {
    const topSiz = req.body;
    try {
        const result = await topSize.create(topSiz, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTopSize = async (req, res) => {
    try {
        const result = await topSize.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
