import {Request,Response} from "express"
import { Blog } from "../model/Blogs"
import {blogErrors} from "./errorsController"
import * as fs from "fs"
import path from "path"
// import { startSession } from "mongoose"
import { User } from "../model/Users"
export const Upload = async(req:Request,res:Response) =>{
    // let session = null
    const{title,story,category} = req.body
    try {
        const blog = new Blog({
            title,
            story,
            category,
            users:uid
        }).save()
        // session = await startSession()
        // session.startTransaction()
        // await User.findOneAndUpdate(
        //     {_id:uid},
        //     {
        //         $inc:{
        //             'postCount': 1
        //         }
        //     },
        //     {
        //         session:session
        //     }
        // )

        // await session.commitTransaction()
        // const blog = await Blog.create({
        //     title:req.body.title,
        //     story:req.body.story,
        //     author:req.body.author,
        //     category:req.body.category,
        //     image:{
        //         data:fs.readFileSync(path.join(__dirname,"..","public/"+ req.file?.filename)),
        //         contentType:"image/jpg"
        //     }
        // })
        res.status(200).json({message:"Uploaded Successfully",blog})
    } catch (error) {
        await session?.abortTransaction()
        const errors = blogErrors(error)
        console.log(error);
        res.status(400).json({errors})
    }finally{
        await session?.endSession()
    }
}
