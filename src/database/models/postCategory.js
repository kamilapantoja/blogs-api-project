module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },
    categoryId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true 
    },
  }, {
    timestamps: false,
    tableName: 'PostCategories',
  });

  PostCategory.associate = (models) => {

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: /* 'BlogPost' */ 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: /* 'Categories' */ 'blogPost',
    })
  };

  return PostCategory;
};