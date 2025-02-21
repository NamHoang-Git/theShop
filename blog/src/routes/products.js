import express from "express";
const router = express.Router();

import productController from '../app/controllers/ProductController.js';

router.get('/:slug', productController.show);

export default router;