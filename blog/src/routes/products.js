import express from "express";
const router = express.Router();

import productController from '../app/controllers/ProductController.js';

// Route để thêm sản phẩm vào giỏ hàng
router.post('/:slug/:id', productController.addCart);

// Route để xóa sản phẩm khỏi giỏ hàng
router.delete('/remove/:productId', productController.removeFromCart);

// Route để hiển thị trang chi tiết sản phẩm
router.get('/:slug', productController.show);

export default router;