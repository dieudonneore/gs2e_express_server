const express = require('express');
const res = require('express/lib/response');
const router = express.Router();


// get request to see if our server is working
router.get('/', (req, res) => {
    res.send("Hello world");
})

router.post('/', (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({
        "message": req.body
    })
})

module.exports = router;