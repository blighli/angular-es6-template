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


## Tests

### Running unit tests

Grunt automatically runs the karma tests on every file change.

If you want to deactivate that (large testsuite will slow down browser reload in dev), simply remove the
karma entries from the

* delta config
* the watch task

and run manually via

```bash
karma start karma.conf.js
```

### Running unit tests on CI (TeamCity)

By adding the reporters flag, a special report for TeamCity is generated an automatically consumed (if run via TS).

```bash
karma start karma.conf.js --singleRun=true --browsers=Firefox --reporters=progress,teamcity
```

### Unit test coverage

On every Karma test run, coverage reports for TeamCity and HTML are generated below test/reports/unit.
To deactivate this behaviour, change

reporters: ['progress', 'coverage']

to

reporters: ['progress']

in karma.conf.js.


### Protractor

Install and webdriver start:

```bash
cp test/e2e/settings.js.example test/e2e/settings.js
npm install -g protractor # once and on protractor updates
webdriver-manager update
webdriver-manager start
```

Make sure the application runs under the URL given in test/e2e/settings.js.

On second console start:

```bash
protractor protractor.conf.js
```

### Protractor reports

Below test/reports/e2e/xml a test report in JUnit XML format is written for each run.
This format can be consumed by basically every CI server or test reporting tool, including our TeamCity.
