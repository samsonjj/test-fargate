const express = require('express')
const app = express()

const PORT = 80

app.get('/', (req, res) => {
	res.end('why do ants not get sick?\n\nbecause they have little antibodies!')
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
