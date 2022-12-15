import { homeSliderData, policy } from "../model/webDB.js";

export const addPolicy = (req, res) => {
    const policyDB = req.body;
    policy.create(policyDB, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    }) 
}


export const getPolicy = (req, res) => {
    policy.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    }) 
}

export const addHomeSliderData = (req, res) => {
    const homeSlider = req.body;
    homeSliderData.create(homeSlider, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

export const getHomeSliderData = (req, res) => {
    homeSliderData.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}