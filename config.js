System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "stage": 0,
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.3",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "autobind-decorator": "npm:autobind-decorator@1.2.0",
    "babel": "npm:babel-core@5.7.4",
    "babel-runtime": "npm:babel-runtime@5.7.0",
    "bluebird": "npm:bluebird@2.9.34",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "eventemitter2": "npm:eventemitter2@0.4.14",
    "immutable": "npm:immutable@3.7.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "lodash": "npm:lodash@3.10.0",
    "loglevel": "npm:loglevel@1.3.1",
    "moment": "github:moment/moment@2.10.3",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.3"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.7.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bluebird@2.9.34": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:loglevel@1.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

