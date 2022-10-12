import { model, Schema } from "mongoose";
const blogSchema = new Schema({
    title:{
        type:Schema.Types.String,
        required:[true,"Please enter a Title"]
    },
    story:{
        type:Schema.Types.String,
        required:[true,"Please enter your story"]
    },
    category:{
        type:Schema.Types.String,
        required:[true,"Please enter the category of your story"]
    },
    users:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    // image:{
    //     contentType:Schema.Types.String,
    //     data:Buffer  
    // }
},{
    timestamps:true
}
)

export const Blog = model("post",blogSchema)