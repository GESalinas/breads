const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('main bread page')
})

module.exports = router