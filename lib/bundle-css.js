var postcss = require('postcss')
  , clean = require('postcss-clean')
  , url = require('postcss-url')
  , autoprefixer = require('autoprefixer')
  , fs = require('fs')

var css = fs.readFileSync(__dirname + '/../src/style.css', 'utf8')

postcss()
  .use(autoprefixer({ env: 'last 2 versions' }))
  .use(url({ filter: __dirname + '/../img', url: 'inline' }))
  .use(clean())
  .process(css, {
    from: __dirname + '/../src/style.css',
    to: __dirname + '/../build/style.css'
  })
  .then(function (css) { console.log(css.css) })
