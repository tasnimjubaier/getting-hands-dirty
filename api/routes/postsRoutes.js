'use strict'
const axios = require('axios')


const route = (app) => {
    const postAPI = require('../../constants/externalAPIs')
    
    app.get('/', (req, res) => {
        var posts
        axios.get(`${postAPI.jsonplaceholderPosts}`)
        .then(response => {
            posts = response.data.filter(element => element.id <= 10)
            res.json(posts)
        })
        .catch(err => res.status(404).send(err))
    })

    // app.get('/:postId', (req, res) => {
    //     console.log('why here?')
    //     axios.get(`${postAPI.jsonplaceholderPosts}${req.params.postId}`)
    //     .then(response => {
    //         res.json(response.data)
    //     })
    //     .catch(err => res.status(404).send(err))
    // })
}

module.exports = route;