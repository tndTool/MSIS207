import { homeSliderData, policy } from "../models/webDB.js";

export const addPolicy = async (req, res) => {
    const policyDB = req.body;
    try {
        const result = await policy.create(policyDB, {raw: true});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getPolicy = async (req, res) => {
    try {
        const result = await policy.findAll({raw: true});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const addHomeSliderData = async (req, res) => {
    const homeSlider = req.body;
    try {
        const result = await homeSliderData.create(homeSlider, {raw: true});
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getHomeSliderData = async (req, res) => {
    try {
        const result = await homeSliderData.findAll({raw: true});
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
}