const { Sequelize, DataTypes } = require('sequelize')
const Tag = require('./tag.model')
const Blog = require('./blog.model')

const sequelize = new Sequelize(
  'postgres://postgres:Sonelgaz.1@127.0.0.1:5432/polkit-v1'
)

const db = {
  sequelize,
  Sequelize,
  tags: Tag(sequelize, DataTypes),
  blogs: Blog(sequelize, DataTypes),
}

db.tags.belongsToMany(db.blogs, {
  through: 'blogTags',
})

db.blogs.belongsToMany(db.tags, {
  through: 'blogTags',
})

module.exports = db
