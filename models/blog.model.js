module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING(1234),
    },
  })

  return Blog
}
