import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router(); //creation of a router

router.get('/test', test);

export default router;