import mongoose from 'mongoose';
import OrderInterface, { OrderEnum, OrderStatusEnum } from '../types/Order.js';

const orderSchema: mongoose.Schema<OrderInterface> = new mongoose.Schema<OrderInterface>({

    cartItems: [{
        productId: String,
        name: String,
        description: String,
        price: Number,
        quantity: Number
    }],
    userId: String,
    userName: String,
    userEmail: String,
    
    orderTime: Date,
    status: {
        type: String,
        enum: Object.values(OrderStatusEnum),
    },
    totalPrice: Number,
    shippingDetails: {
        address: {
            country: String,
            city: String,
            celPhone: Number,
            street: String,
            zipCode: Number
        },
        contactNumber: String,
        orderType: {
            type: String,
            enum: Object.values(OrderEnum),
        }
    }
}
    , {
        strict: false
    }
);

const orderModel: mongoose.Model<OrderInterface> = mongoose.model<OrderInterface>('orders', orderSchema);

export default orderModel