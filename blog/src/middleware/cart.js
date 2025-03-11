// middleware/cart.js
import Cart from '../app/models/Cart.js';

export async function loadCart(req, res, next) {
    try {
        const cartId = req.cookies.cartId;
        let cartItems = [];
        if (cartId) {
            const cart = await Cart.findOne({ cartId }).populate('items.productId');
            if (cart) {
                cartItems = cart.items
                    .filter(item => item.productId) // Bỏ qua item không hợp lệ
                    .map(item => ({
                        productId: item.productId._id,
                        name: item.productId.name,
                        price: item.productId.price,
                        image: item.productId.image,
                        slug: item.productId.slug,
                        quantity: item.quantity,
                        productType: item.productId.productType || []
                    }));
            }
        }
        res.locals.cartItems = cartItems;
        next();
    } catch (error) {
        next(error);
    }
}