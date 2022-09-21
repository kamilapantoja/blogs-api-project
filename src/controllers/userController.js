const userService = require('../services/userService');
const loginService = require('../services/loginService');

const postUser = async (req, res) => {
    try {
        const { display, email, password, image } = req.body;

        await userService.postUser({ display, email, password, image });

        const result = await loginService.getDataUser({ email });

        return res.status(201).json({ token: result });
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
    }
};

const getUser = async (req, res) => {
    try {
        const result = await userService.getUser();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userService.getUserById(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
    }
};

module.exports = {
    postUser,
    getUser,
    getUserById,
};