import mongoose from 'mongoose'  //importing mongoose

const subTodoSchema = new mongoose.Schema({  //schema is a structure of data in a db ,define schema
    content:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{   //define relationship
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

export const SubTodo = mongoose.model('SubTodo',subTodoSchema)