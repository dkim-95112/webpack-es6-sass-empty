# webpack-es6-sass-empty

An empty node express, webpack, sass-loader, project

## `package.json`
```
"scripts": {
  "run-node": "node app.js",
  "pack-web": "webpack --config webpack.config.babel.js"
}
```

## `app.js`
```
router
  .use('/', express.static('client/build/dist'))
  .get('/', (req, res) => {
    res
      .send('<script src="bundle.js"></script>')
  })
```

## `webpack.config.babel.js`
```
entry: {
  index: './client/index.js'
}
```

## Modules
 ### `./client/index.js`
```
import css from './index.scss' // Adding <script> tag to dom
const foo = 'bar'
document.write(`
<!doctype html>
<head>
<title>Helo worl title</title>
</head>
<body>
<h1>Helo ${foo} body</h1>
</body>
`) // Es6 template string
```
