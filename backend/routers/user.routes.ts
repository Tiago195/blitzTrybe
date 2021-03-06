import { Router } from 'express'
import user from '../controllers/user.controller'
import validIsAdmin from '../middlewares/validIsAdmin'
import validLogin from '../middlewares/validLogin'
import validToken from '../middlewares/validToken'
import validUser from '../middlewares/validUser'

const router = Router()

router.get('/',  validToken, validIsAdmin, user.getAll)
router.get('/:id', user.getById)
router.post('/login', validLogin, user.getByEmailAndPassword)
router.post('/', validUser, user.create)

export default router
