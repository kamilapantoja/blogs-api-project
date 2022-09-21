const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

require('dotenv').config();

const getDataUser = async ({ email }) => {
    const result = await User.findOne({ where: { email } });
    console.log(result);
    const token = jwt.sign(
        { id: result.dataValues.id }, process.env.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: '1d',
        },
    );

    return token;
};

module.exports = {
    getDataUser,
};