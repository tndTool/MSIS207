import { DataTypes } from "sequelize";
import db from "./database.js";


const policy = db.define("Policy", {
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  icon: { type: DataTypes.STRING },
}, {timestamps: false});

const homeSliderData =  db.define("HomeSliderData", {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    color: {type: DataTypes.STRING},
    path: {type: DataTypes.STRING},
}, {timestamps: false})

const outwearCategory= db.define("OutwearCategory", {
  display: { type: DataTypes.STRING },
  categorySlug: { type: DataTypes.STRING },
}, {timestamps: false})

const outwearColor= db.define("OutwearColor", {
  display: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
}, {timestamps: false})

const outwearSize= db.define("OutwearSize", {
  display: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING },
}, {timestamps: false})

const topCategory= db.define("TopCategory", {
  display: { type: DataTypes.STRING },
  categorySlug: { type: DataTypes.STRING },
}, {timestamps: false})

const topColor= db.define("TopColor", {
  display: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
}, {timestamps: false})

const topSize= db.define("TopSize", {
  display: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING },
}, {timestamps: false})

const bottomsCategory= db.define("BottomsCategory", {
  display: { type: DataTypes.STRING },
  categorySlug: { type: DataTypes.STRING },
}, {timestamps: false})

const bottomsColor= db.define("BottomsColor", {
  display: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
}, {timestamps: false})

const bottomsSize= db.define("BottomsSize", {
  display: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING },
}, {timestamps: false})

const accessoriesCategory= db.define("AccessoriesCategory", {
  display: { type: DataTypes.STRING },
  categorySlug: { type: DataTypes.STRING },
}, {timestamps: false})

const accessoriesColor= db.define("AccessoriesColor", {
  display: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
}, {timestamps: false})

const accessoriesSize= db.define("AccessoriesSize", {
  display: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING },
}, {timestamps: false})

db.sync();
export {
  homeSliderData,
  policy,
  outwearCategory, 
  outwearColor,
  outwearSize, 
  topCategory, 
  topColor, 
  topSize, 
  bottomsCategory,
  bottomsColor, 
  bottomsSize, 
  accessoriesCategory, 
  accessoriesColor, 
  accessoriesSize
  };