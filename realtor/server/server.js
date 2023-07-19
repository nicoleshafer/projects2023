const express = require('express')
const app = express()

app.get('/search', (req, res) => {
    const query =  req.query.query;

    res.send(`Search resuls for: ${query}`)
})

app.listen(3000, ()=>{
    console.log("Serving is running on port 3000")
})