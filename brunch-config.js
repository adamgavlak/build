exports.config = {
    files: {
        javascripts: {
            joinTo: 'assets/app.js'
        },
        stylesheets: {
            joinTo: 'assets/style.css'
        }
    },

    conventions: {
        assets: /^(static)/
    },

    paths: {
        watched: ["static", "css", "js", "views"],
        public: "docs"
    },

    plugins: {
        stylus: {
            includeCss: true,
            imports: ['node_modules/normalize.css/normalize.css']
        },
        pug: {
            staticBasedir: 'views',
            staticPretty: true
        }
    },

    modules: {
        autoRequire: {
            'js/app.js': ['js/app']
        }
    },

    npm: {
        enabled: true
    }
}