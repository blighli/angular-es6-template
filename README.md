# README

## Installing

```bash
npm install -g grunt-cli karma-cli protractor jspm # might need sudo
git clone git@github.com:DcsMarcRemolt/angular-es6-template.git

cd angular-es6-template
cp src/app/settings.js.example src/app/settings.js # once - and update on new settings

npm install
grunt watch
```

Go to http://localhost:3000/


## Building for production

```bash
grunt compile connect:production
```

Go to http://localhost:3000/

The compiled code (to move to production server) lies below build/production.
