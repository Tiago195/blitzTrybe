import { Router } from 'express'
import user from '../controllers/user.controller'

const router = Router()

router.get('/', user.getAll)
router.get('/:id', user.getById)
router.get('/login', user.getByEmailAndPassword)
router.post('/', user.create)

export default router
