import { Router } from 'express'
import task from '../controllers/task.controller'
import validIsAdmin from '../middlewares/validIsAdmin'
import validToken from '../middlewares/validToken'

const router = Router()

router.get('/:id', validToken,task.getByIdUser)
router.post('/', validToken, validIsAdmin, task.create)
router.put('/', task.editById)
router.delete('/:id', validToken, validIsAdmin, task.deleteById)

export default router