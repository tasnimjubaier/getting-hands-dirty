'use strict'
const drupalContent = require('../controllers/drupalContent')

const route = (app) => {

    app.route('/drupal').get( async (req, res) => { 
        var response = await drupalContent.drupalContentData()
        var responseKeys = await drupalContent.drupalContentKeys()
        var result = {}
        result[Object.keys(response)[1]] = response[Object.keys(response)[1]]
        var result2 = {}
        result2[Object.keys(result)[0]] = result[Object.keys(result)[0]]
        res.send(result); 
    })
}

module.exports = route