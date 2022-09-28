import { Request,Response } from "express";
import {User} from "../model/Users"
import bcrypt from "bcrypt"
export const Update = async (req:Request,res:Response)=>{
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body?.password,salt)
        const user = await User.findOneAndUpdate(req.body?.username,{
            password:hashedPassword
            
        })  
        res.status(201).json({message:"qwerty"})
    }
    catch (error) {
        console.log(error);
    }

}