import express from "express";
const router = express.Router();

import signupController from '../app/controllers/SignupController.js';

router.get('/', signupController.index);

export default router;