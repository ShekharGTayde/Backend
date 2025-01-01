import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        rquired:true
    },
    qualification:{
        type:String,
        required:true
    },
    experincedInYears:{
        type:Number,
        default:0
    },
    specialization:{
        type:String
    },
    workInHospital:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
        }
    ]
},{timestamps:true})

export const Doctor = mongoose.model('Doctor',doctorSchema)