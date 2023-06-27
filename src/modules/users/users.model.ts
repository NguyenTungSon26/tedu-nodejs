import mongoose from "mongoose";
import IUser from "./user.interface";

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        index:true,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
    },
    data:{
        type: Date,
        default: Date.now,
    }
})
// dang strong nen phai connect voi interface vua tao ra va sd userSchema vaf .model (trong mongoose.Document chua nhieu thuoc tinh bao gom id nen k can khia bao id, con interface chi de hung ra ngoai de thao tac)
export default mongoose.model<IUser & mongoose.Document>("user",UserSchema);