const categoryService = require('../services/categoryService');

const postCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const result = await categoryService.postCategory({ name });

        return res.status(201).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: '"name" is required' });
    }
};

const getCategory = async (req, res) => {
    try {
        const result = await categoryService.getCategory();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
    }
};

module.exports = {
    postCategory,
    getCategory,
};