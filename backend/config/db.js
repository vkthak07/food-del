import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dynamicvk51:vkdynamic7@cluster0.2shhatf.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}