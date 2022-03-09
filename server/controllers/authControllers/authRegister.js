const User = require('../../models/userModel');
const Role = require('../../models/roleModel');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const Roles = require('../../access/roles');
const generateToken = require('../../utils/generateToken');

const authRegister = async (request, response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ message: 'Ошибка при регистрации', errors });
    }

    const user = request.body;
    const emailForm = user.email;
    const emailMatch = await User.findOne({ email: emailForm });

    if (emailMatch) {
      return response.status(404).json({
        status: 'error',
        text: 'email must be unique',
      });
    }

    const hashedPassword = bcrypt.hashSync(user.password, 7);
    const userRole = await Role.findOne({ value: Roles.user });
    const newUser = new User({
      ...user,
      password: hashedPassword,
      roles: [userRole.value],
    });

    const userToSave = await newUser.save();

    const {_id, username, password ,email, roles} = userToSave;
    const userAuth = { username, email, roles };
    const token = generateToken({password, _id, roles});

    response.status(201).json({ user: userAuth, token: token });
  } catch (error) {
    if (error.code === 11000) {
      response.status(400).json({
        status: 'error',
        message: error.message,
        text: 'username must be unique',
      });
    }
    response.status(400).json({
      status: 'error',
      message: error.message,
      text: 'user was not saved',
    });
  }
};

module.exports = authRegister;
