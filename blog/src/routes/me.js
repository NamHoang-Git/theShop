import express from "express";
const router = express.Router();

import meController from '../app/controllers/MeController.js';

// ACCOUNT
router.get('/account/profile', meController.profile);
router.get('/account/password', meController.password);
router.get('/account/edit', meController.editAccount);

// ADMIN
router.get('/admin/data', meController.data);
router.get('/admin/data/edit/:id', meController.edit);
router.get('/admin/create', meController.create);
router.get('/admin/stored', meController.stored);
router.get('/admin/shipping', meController.shipping);
router.get('/admin/bill', meController.bill);
router.get('/admin/report', meController.report);
router.get('/admin/trash', meController.trash);

    // admin (data)
    router.post('/admin/form-action-data', meController.formActionData);
    router.post('/admin/store', meController.store);
    router.put('/admin/:id', meController.update);
    router.delete('/admin/:id', meController.delete);
    router.delete('/admin/force/:id', meController.force);
    router.patch('/admin/restore/:id', meController.restore);

    // admin (stored)
    router.post('/admin/stored/createStored', meController.createStored);
    router.put('/admin/stored/:id', meController.updateStored);
    router.delete('/admin/stored/:id', meController.deleteStored);
    router.delete('/admin/stored/force/:id', meController.forceStored);
    router.patch('/admin/stored/restore/:id', meController.restoreStored);

    // admin (shipping)
    router.post('/admin/shipping/createShipping', meController.createShipping);
    router.put('/admin/shipping/:id', meController.updateShipping);
    router.delete('/admin/shipping/:id', meController.deleteShipping);
    router.delete('/admin/shipping/force/:id', meController.forceShipping);
    router.patch('/admin/shipping/restore/:id', meController.restoreShipping);

    // admin (bill)
    router.post('/admin/bill/createBill', meController.createBill);
    router.put('/admin/bill/:id', meController.updateBill);
    router.delete('/admin/bill/:id', meController.deleteBill);
    router.delete('/admin/bill/force/:id', meController.forceBill);
    router.patch('/admin/bill/restore/:id', meController.restoreBill);

router.get('/cart', meController.cart);
router.get('/pay', meController.pay);
router.get('/', meController.index);

export default router;