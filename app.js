'use strict'
const path = require('path'),
  express = require('express'),
  app = express(),
  router = express.Router(),
  PORT = 3000

router
  .use('/', express.static('client/build/dist'))
  .get('/', (req, res) => {
    res
      .send('<script src="bundle.js"></script>')
  })

app
  .use(router)
  .listen(PORT, () => {
    console.log(`Node express listening at port ${PORT}`)
  })

