const { createTag, createBlog, addBlog, fetchTag } = require('../controllers')

const router = require('express').Router()

router.post('/tag', createTag)
router.post('/blog', createBlog)
router.post('/tag/:tagId/blog/:blogId', addBlog)
router.get('/tag', fetchTag)

module.exports = router
