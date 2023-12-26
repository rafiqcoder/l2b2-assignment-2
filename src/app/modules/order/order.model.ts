import { Schema, model } from "mongoose"
import { IOrder } from "./order.interface"

const orderSchema: Schema<IOrder> = new Schema({
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    // },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

const Order = model<IOrder>("Order", orderSchema)
export default Order
