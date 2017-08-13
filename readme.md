# Build

Simple website build system using Brunch, Stylus (CSS), Babel (JS) and Pug (HTML). It outputs all files into the `docs` directory so it's easy to use with GitHub Pages, but you can easily configure it by changing `config.paths.public` in `brunch-config.js`.

## Installation 

Clone this repository:

```
$ git clone https://github.com/gavlak/build.git project_name
$ cd project_name
```

Then install all packages needed using `npm`:
```
$ npm install
```

or using `yarn`:
```
$ yarn
```

And after all packages are downloaded you can start using it. See more in [commands](#commands) section.

## Directory structure 
```
.
├── brunch-config.js
├── css                 # Stylus style files
│   └── style.styl
├── docs                # All compiled files are placed in docs
├── js                  # Javascript files
│   └── app.js
└── static              # All static files (including Pug)
    ├── _layout.pug     # Files with underscore are ignored during compilation
    ├── images
    └── index.pug       # Only *.pug files are compiled in static directory
```

It's pretty simple, styles and javascript have their separate directories and static content (including pug templates) is in `static` directory.

## Commands 

```
$ brunch build|b [-p|--production]    # Builds all files once
                                      # -p|--production builds files for production
$ brunch watch|w [-s|--server]        # Builds files after every change
                                      # -s|--server starts local dev server
```