import { bottomsCategory, bottomsColor, bottomsSize } from "../models/webDB.js";

export const addBottomsCategory = async (req, res) => {
    const bottomsCag = req.body;
    try {
        const result = await bottomsCategory.create(bottomsCag, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getBottomsCategory = async (req, res) => {
    try {
        const result = await bottomsCategory.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addBottomsColor = async (req, res) => {
    const bottomsCol = req.body;
    try {
        const result = await bottomsColor.create(bottomsCol, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getBottomsColor = async (req, res) => {
    try {
        const result = await bottomsColor.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addBottomsSize = async (req, res) => {
    const bottomsSiz = req.body;
    try {
        const result = await bottomsSize.create(bottomsSiz, {raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getBottomsSize = async (req, res) => {
    try {
        const result = await bottomsSize.findAll({raw: true});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}
