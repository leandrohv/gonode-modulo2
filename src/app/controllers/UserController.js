const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    const deleted_at = null

    await User.create({ ...req.body, avatar, deleted_at })

    req.flash('success', 'Usuário cadastrado com sucesso')

    return res.redirect('/')
  }
}

module.exports = new UserController()
