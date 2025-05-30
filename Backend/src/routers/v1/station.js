import express from 'express'
import { isAuthenticated } from '../../middleware/AuthMiddleware.js';
import {createStationController, deleteStationController, getStationController, updateStationController } from '../../Controllers/chargingStationController.js';

const router = express.Router();

router.post('/create',isAuthenticated,createStationController);
router.get('/read',isAuthenticated,getStationController);
router.put('/update',isAuthenticated,updateStationController);
router.delete('/delete',isAuthenticated,deleteStationController);

export default router;