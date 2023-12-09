import express from 'express'
import { signIn } from '../controllers/auth.controller.js'

const router = express.Router()
router.post('/signIn',signIn)
export default router