const express = require('express')
const router = express.Router()
const Post = require('../loginData/User')

//get all of the posts
router.get('/', async(req, res)=>{ //sends us back a message when we are go to the route
    try{
        const posts = await Post.find() //saves to the data base
        res.json(posts)
    } catch(err){
        res.json({message: err})
    }
})

//submits a post
router.post('/', async (req, res) => {
        console.log(req.body) //just to see it come through

        const post = new Post({
            username: req.body.title,
            email: req.body.description
        })
        try {
            const savedPost = await post.save() //saves to the data base
            res.json(savedPost)
        } catch (err) {
            res.json({ message: err })
            console.log(err)
        }
    })

//specific post
router.get('/:postId', async(req, res) => {
    try {
        const specificPost = Post.findById(req.params.postId)
        res.json(specificPost)
    } catch (err) {
        res.json({ message: err })
        console.log(err)
    }
})

//delete post
router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (err) {
        res.json({ message: err })
        console.log(err)
    }
})

//update post
router.patch('/:postId', (req, res) => {
    try {
        const updatedPost = Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {title: req.body.title}}
        )
        res.json(updatedPost)
    } catch (err) {
        res.json({ message: err })
        console.log(err)
    }
})

module.exports = router