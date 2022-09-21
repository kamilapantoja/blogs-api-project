const loginService = require('../services/loginService');

const aproveLogin = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await loginService.getDataUser({ email });
        console.log(result);
    
        return res.status(200).json({ token: result });
      } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
      }
};

module.exports = {
    aproveLogin,
};