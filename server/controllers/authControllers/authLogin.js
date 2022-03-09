const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const generateToken = require('../../utils/generateToken');

const passwordMatch = (password, hash) => bcrypt.compareSync(password, hash);


const authLogin = async (request, response) => {
  try {
    const { email, password } = request.body.data;
    const { _id, username, email: emailDb, password: userPasswordDb, roles } = await User.findOne({ email });

    const correctPassword = passwordMatch(password, userPasswordDb);

    if (!_id || !correctPassword) {
      response.status(404).json({
        status: 'error',
        message: error.message,
        text: 'user was not authenticated',
      });
    }

    const payload = { password, _id, roles };

    const token = generateToken(payload);
    const userAuth = { username, email: emailDb, roles };
    response.status(200).json({ user: userAuth, token: token });
  } catch (error) {
    response.status(404).json({
      status: 'error',
      message: error.message,
      text: 'user was not authenticated',
    });
  }
};
module.exports = authLogin;
