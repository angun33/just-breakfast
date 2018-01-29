// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
        'main.js': /^app/
      }
    },
    stylesheets: {joinTo: 'css/main.css'}
  },

  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: [
         'node_modules/normalize.css'
        ]
      }
    },

    static: {
      pathTransform: (f) => require('path').relative('pages', f), 
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true
          },
          minify: true
        })
      ]
    }
  }
}
