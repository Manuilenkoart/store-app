const router = require('express').Router();
const { check } = require('express-validator');

const { register } = require('../../controllers/index');

router.post(
  '/register',
  [
    check('username', 'имя пользователя не может быть пустым').notEmpty(),
    check('password', 'пароль должен быть длинее 4 и меньше 10').isLength({
      min: 4,
      max: 10,
    }),
  ],
  register,
);

module.exports = router;