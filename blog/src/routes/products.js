import express from "express";
const router = express.Router();

import productController from '../app/controllers/ProductController.js';

router.post('/:slug/:id', productController.addCart);
router.get('/:slug', productController.show);

export default router;