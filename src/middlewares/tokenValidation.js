const jwt = require('jsonwebtoken');

const validationToken = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }

        jwt.verify(authorization, process.env.JWT_SECRET); 
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    } 

    next();
};

module.exports = {
    validationToken,
};