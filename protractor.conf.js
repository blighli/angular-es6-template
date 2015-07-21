require('babel/register')({
  stage: 0
});

var path = require('path');
var ScreenShotReporter = require('protractor-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');


exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine2',

  capabilities: {
    browserName: 'chrome'
  },

  specs: [
    'test/e2e/tests/**/*.scenario.js'
  ],

  allScriptsTimeout: 20000,

  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    defaultTimeoutInterval: 300000
  },

  onPrepare: function () {

    browser.getCapabilities().then(function (cap) {
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: 'xmloutput_' + cap.caps_.browserName,
        savePath: 'test/results/e2e/xml'
      }));
    });

    jasmine.getEnv().addReporter(new ScreenShotReporter({
      baseDirectory: 'test/results/e2e/screenshots',
      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
        var ts = (new Date()).getTime().toString();
        var desc = ts + "_" + descriptions.join('-').replace(/['":+-?*\/|]/g, '');
        var shortDesc = desc.substring(0, 100);

        return path.join(
          capabilities.caps_.platform || 'unknown_platform',
          capabilities.caps_.browserName || 'unknown_browser',
          capabilities.caps_.version || 'unknown_version',
          shortDesc);
      },
      takeScreenShotsOnlyForFailedSpecs: true
    }));
  }
};
