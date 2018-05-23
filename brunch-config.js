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
      sourceMapEmbed: true,
      options: {
        includePaths: [
         'node_modules/normalize.css'
        ]
      }
    },

    babel: {
      presets: [['env', {
        targets: {
          browsers: ['ie >= 9']
        }
      }]]
    },

    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    },

    static: {
      pathTransform: (f) => require('path').relative('pages', f), 
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              ifProd: function(opts) { return process.env.NODE_ENV === 'production' ? opts.fn(this) : opts.inverse(this); },
              ifEq: function(a, b, opts) { return a === b ? opts.fn(this) : opts.inverse(this); }
            }
          },
          minify: true
        })
      ]
    }
  }
}
