const express = require('express')
const app = express()

const PORT = 80

app.get('/', (req, res) => {
	res.end('hello, world')
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
