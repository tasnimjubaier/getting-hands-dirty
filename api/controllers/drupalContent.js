'use strict'
const axios = require('axios')
const APIs = require('../../constants/externalAPIs')

const drupalContent = async () => {
    try {
        const ret = await axios.get(`${APIs.drupalCMS}`)
        return ret
    } catch (err) {
        console.log(err)
        return null 
    }
}
const drupalContentData = async () => {
    try {
        const ret = await axios.get(`${APIs.drupalCMS}`)
        return ret.data
    } catch (err) {
        console.log(err)
        return null 
    }
}
const drupalContentKeys = async () => {
    try {
        const ret = await axios.get(`${APIs.drupalCMS}`)
        return Object.keys(ret)
    } catch (err) {
        console.log(err)
        return null 
    }
}
module.exports = {drupalContent, drupalContentData, drupalContentKeys}