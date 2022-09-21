const { User } = require('../database/models');
const loginService = require('./loginService');

const postUser = async ({ displayName, email, password, image }) => {
    await User.create({ displayName, email, password, image });

    const token = loginService.getDataUser({ email });

    return token;
};

const getUser = async () => {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });

    return result;
};

const getUserById = async (id) => {
    const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    return result;
};

module.exports = {
    postUser,
    getUser,
    getUserById,
};