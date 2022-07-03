import { describe } from 'mocha'
import { expect } from 'chai'
import Sinon from 'sinon'
import userModel from '../../models/user.model'
import connection from '../../models/connection'
// import IUser from '../../interfaces/user.interface'

describe('testa model user', () => {
  describe('testa getAll', () => {
    const response = [[
      {
        id: 1,
        name: 'tiago',
        email: 'tiago@email.com',
        github: 'tiagoLindao',
        is_admin: 1
      },
      {
        id: 2,
        name: 'yang',
        email: 'yang@email.com',
        github: 'yang',
        is_admin: 0
      },
      {
        id: 3,
        name: 'theus',
        email: 'theus@email.com',
        github: 'theus',
        is_admin: 0
      }
    ]]

    const sinon = Sinon.stub(connection, 'execute')
    before(() => {
      sinon.resolves(response as any)
    })

    after(() => {
      sinon.restore()
    })
  
    it('testa se retornar os valores corretamente', async () => {
      const users = await userModel.getAll()

      expect(users).to.be.eql(response.flat())
    })
  })
})