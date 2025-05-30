import express from 'express'
import userRouter from '../v1/user.js'
import stationRouter from '../v1/station.js'

const router = express.Router();

router.use('/user',userRouter);
router.use('/station',stationRouter);

export default router;