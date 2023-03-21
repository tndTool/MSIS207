import { accessoriesCategory, accessoriesColor, accessoriesSize } from "../model/webDB.js";

export const addAccessoriesCategory = async (req, res) => {
    const accessoriesCag = req.body;
    try {
        const result = await accessoriesCategory.create(accessoriesCag, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAccessoriesCategory = async (req, res) => {
    try {
        const result = await accessoriesCategory.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addAccessoriesColor = async (req, res) => {
    const accessoriesCol = req.body;
    try {
        const result = await accessoriesColor.create(accessoriesCol, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAccessoriesColor = async (req, res) => {
    try {
        const result = await accessoriesColor.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addAccessoriesSize = async (req, res) => {
    const accessoriesSiz = req.body;
    try {
        const result = await accessoriesSize.create(accessoriesSiz, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAccessoriesSize = async (req, res) => {
    try {
        const result = await accessoriesSize.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
