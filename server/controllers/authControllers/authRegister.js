const User = require('../../models/userModel');
const Role = require('../../models/roleModel');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const authRegister = async (request, response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response
        .status(400)
        .json({ message: 'Ошибка при регистрации', errors });
    }

    const user = request.body;
    const email = user.email;
    const emailMatch = await User.findOne({ email });

    if (emailMatch) {
      return response.status(404).json({
        status: 'error',
        text: 'email must be unique',
      });
    }

    const hashedPassword = bcrypt.hashSync(user.password, 7);
    const userRole = await Role.findOne({ value: 'USER' });
    const newUser = new User({
      ...user,
      password: hashedPassword,
      roles: [userRole.value],
    });

    const userToSave = await newUser.save();

    response.status(201).json({
      status: 'success',
      user: userToSave,
    });
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
