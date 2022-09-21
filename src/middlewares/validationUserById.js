const { User } = require('../database/models');

const validationUserById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await User.findByPk(id);
        
        if (!result) return res.status(404).json({ message: 'User does not exist' });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error });
    } 

    next();
};

module.exports = {
    validationUserById,
};