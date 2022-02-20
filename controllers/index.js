const db = require('../models')
const Tag = db.tags
const Blog = db.blogs

exports.createTag = (req, res) => {
  Tag.create({ name: req.body.name })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tag.',
      })
    })
}

exports.createBlog = (req, res) => {
  Blog.create({ title: req.body.title, desc: req.body.desc })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Blog.',
      })
    })
}

exports.addBlog = (req, res) => {
  Tag.findByPk(req.params.tagId).then((tag) => {
    if (!tag) return res.send('Tag not found!')
    Blog.findByPk(req.params.blogId)
      .then((blog) => {
        if (!blog) return res.send('Blog not found!')
        tag.addBlog(blog).then((res) => console.log(res))
        res.send(tag)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred.',
        })
      })
  })
}

exports.fetchTag = (req, res) => {
  Tag.findAll({
    include: {
      model: Blog,
      required: true,
    },
  })
    .then((tags) => {
      res.send(tags)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred.',
      })
    })
}
