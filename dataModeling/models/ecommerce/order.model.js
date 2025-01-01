import mongoose from 'mongoose'

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    },
   
})

const orderSchema = new mongoose.Schema({
    oredrPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderItems:[orderItemsSchema],
    estimatedDelivery:{
        type:Date
    },
    status:{
        type:String,
        enum:['PENDING','CANCELLED','DELEVERED'],
        default:'PENDING'
    },
    address:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)