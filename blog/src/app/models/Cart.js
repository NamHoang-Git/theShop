// models/Cart.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Cart = new Schema({
    userId: { type: String, required: false }, // Nếu có user sau này
    cartId: { type: String, required: true, unique: true }, // ID tạm thời cho giỏ hàng nếu không có user
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 }
    }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Cart', Cart);