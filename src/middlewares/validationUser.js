const { User } = require('../database/models');

const validationUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;

    const result = await User.findAll({ where: { email } });

    const ifUserRegistered = result.find((user) => user.dataValues.email === email);

    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    
    if (displayName.length < 8) {
        return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' }); 
    }

    if (!regex.test(email)) {
        return res.status(400)
            .json({ message: '"email" must be a valid email' }); 
    }

    if (password.length < 6) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' }); 
    }

    if (ifUserRegistered) return res.status(409).json({ message: 'User already registered' });

    next();
};

module.exports = {
    validationUser,
};