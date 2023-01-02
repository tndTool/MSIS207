// This model using for mongoose. While app is running on mysql as default 
// if u want to using mongoose for app please change folder imported in controllers from ../models -> ../model 
// and change code in that right for your model
// u also create connnection in app.js for using mongoose

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Policy = new Schema({
  name: { type: String },
  description: { type: String },
  icon: { type: String },
});

const HomeSliderData =  new Schema({
    title: { type: String },
    description: { type: String },
    img: { type: String },
    color: {type: String},
    path: {type: String},
})

const OutwearCategory= new Schema({
  display: { type: String },
  categorySlug: { type: String },
})

const OutwearColor= new Schema({
  display: { type: String },
  color: { type: String },
})

const OutwearSize= new Schema({
  display: { type: String },
  size: { type: String },
})

const TopCategory= new Schema({
  display: { type: String },
  categorySlug: { type: String },
})

const TopColor= new Schema({
  display: { type: String },
  color: { type: String },
})

const TopSize= new Schema({
  display: { type: String },
  size: { type: String },
})

const BottomsCategory= new Schema({
  display: { type: String },
  categorySlug: { type: String },
})

const BottomsColor= new Schema({
  display: { type: String },
  color: { type: String },
})

const BottomsSize= new Schema({
  display: { type: String },
  size: { type: String },
})

const AccessoriesCategory= new Schema({
  display: { type: String },
  categorySlug: { type: String },
})

const AccessoriesColor= new Schema({
  display: { type: String },
  color: { type: String },
})

const AccessoriesSize= new Schema({
  display: { type: String },
  size: { type: String },
})

const homeSliderData = mongoose.model("HomeSliderData", HomeSliderData);

const policy = mongoose.model("Policy", Policy);

const outwearCategory = mongoose.model("OutwearCategory", OutwearCategory);

const outwearColor = mongoose.model("OutwearColor", OutwearColor);

const outwearSize = mongoose.model("OutwearSize", OutwearSize);

const topCategory = mongoose.model("TopCategory", TopCategory);

const topColor = mongoose.model("TopColor", TopColor);

const topSize = mongoose.model("TopSize", TopSize);

const bottomsCategory = mongoose.model("BottomsCategory", BottomsCategory);

const bottomsColor = mongoose.model("BottomsColor", BottomsColor);

const bottomsSize = mongoose.model("BottomsSize", BottomsSize);

const accessoriesCategory = mongoose.model("AccessoriesCategory", AccessoriesCategory);

const accessoriesColor = mongoose.model("AccessoriesColor", AccessoriesColor);

const accessoriesSize = mongoose.model("AccessoriesSize", AccessoriesSize);

export {
  homeSliderData, policy, outwearCategory, outwearColor,
  outwearSize, topCategory, topColor, topSize, bottomsCategory,
  bottomsColor, bottomsSize, accessoriesCategory, accessoriesColor, accessoriesSize
  };