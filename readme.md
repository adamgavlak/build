# Build

Simple website build system using Brunch, Stylus (CSS), Babel (JS) and Pug (HTML).

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

## Commands

```
$ brunch build               # Builds all files once
$ brunch watch               # Builds all files after every change
$ brunch build --production  # Builds and minifies all files for production
```