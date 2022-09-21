const postService = require('../services/postService');

// aqui ta ok
const getPost = async (req, res) => {
    try {
        const result = await postService.getPost();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: error });
    }
};

module.exports = {
    getPost,
};
