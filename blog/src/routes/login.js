import express from "express";
const router = express.Router();

import loginController from '../app/controllers/LoginController.js';

router.get('/', loginController.index);

export default router;