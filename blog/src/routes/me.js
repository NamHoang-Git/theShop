import express from "express";
const router = express.Router();

import meController from '../app/controllers/MeController.js';

// account
router.get('/account/profile', meController.profile);
router.get('/account/password', meController.password);
router.get('/account/edit', meController.editAccount);

// admin
router.get('/admin/data', meController.data);
router.get('/admin/data/edit/:id', meController.edit);
router.get('/admin/create', meController.create);
router.get('/admin/trash', meController.trash);
router.post('/admin/store', meController.store);
router.put('/admin/:id', meController.update);
router.delete('/admin/:id', meController.delete);
router.delete('/admin/force/:id', meController.force);
router.patch('/admin/restore/:id', meController.restore);

router.get('/', meController.index);

export default router;