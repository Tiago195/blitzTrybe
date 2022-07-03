import { Router } from 'express'
import task from '../controllers/task.controller'

const router = Router()

router.get('/:id', task.getByIdUser)
router.post('/', task.create)
router.put('/', task.editById)
router.delete('/', task.deleteById)

export default router