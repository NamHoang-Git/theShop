// controllers/ProductController.js
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import mongooseObj from "../../util/mongoose.js";
import { v4 as uuidv4 } from 'uuid';

class ProductController {
    // [POST] /products/:slug/:id
    async addCart(req, res, next) {
        try {
            const productId = req.params.id;
            const slug = req.params.slug;

            const product = await Product.findOne({ _id: productId });
            if (!product) {
                return res.status(404).json({ success: false, message: "Sản phẩm không tồn tại" });
            }

            let cartId = req.cookies.cartId;
            if (!cartId) {
                cartId = uuidv4();
                res.cookie('cartId', cartId, { maxAge: 30 * 24 * 60 * 60 * 1000 });
            }

            let cart = await Cart.findOne({ cartId });
            if (!cart) {
                cart = new Cart({ cartId, items: [] });
            }

            const existingItem = cart.items.find(item => item.productId.toString() === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.items.push({ productId, quantity: 1 });
            }

            await cart.save();

            // Redirect về trang sản phẩm hiện tại để render lại giỏ hàng
            res.redirect(`/products/${slug}`);
        } catch (error) {
            next(error);
        }
    }

    // [GET] /products/:slug
    async show(req, res, next) {
        try {
            const product = await Product.findOne({ slug: req.params.slug });
            if (!product) {
                return res.status(404).render("error", { message: "Sản phẩm không tồn tại" });
            }

            const cartId = req.cookies.cartId;
            let cartItems = [];
            if (cartId) {
                const cart = await Cart.findOne({ cartId }).populate('items.productId');
                if (cart) {
                    cartItems = cart.items.map(item => ({
                        productId: item.productId._id,
                        name: item.productId.name,
                        price: item.productId.price,
                        image: item.productId.image,
                        slug: item.productId.slug,
                        quantity: item.quantity
                    }));
                }
            }

            res.render("products/show.hbs", {
                isAuthPage: true,
                product: mongooseObj.mongooseToObj(product),
                products: cartItems // Dữ liệu cho Handlebars
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new ProductController();