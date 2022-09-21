const { User, BlogPost, Category } = require('../database/models');

const getPost = async () => BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { // o erro não ta aqui
            model: Category,
            as: 'categories',
        },
    ],
});

module.exports = {
    getPost,
};
