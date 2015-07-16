module.exports = {
  devDir: 'build/development',
  prodDir: 'build/production',

  e2eCoverageDir: 'coverage/e2e',

  appFiles: {
    js: ['src/app/app.js', 'src/**/*.js', '!src/vendor.js', '!src/**/*.spec.js', '!src/**/*.scenario.js', '!src/assets/**/*.js'],
    jsunit: ['src/**/*.spec.js', 'src/**/*.scenario.js'],

    atpl: ['src/app/**/*.tpl.html'],
    ctpl: ['src/common/**/*.tpl.html'],

    html: ['src/index.html'],
    less: 'src/less/main.less'
  },

  vendorFiles: {
    css: ['jspm_packages/**/*.css']
  }
};
