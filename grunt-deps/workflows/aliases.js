module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  gruntTaksUtils.registerTasks({
    'default': function () {
      console.log('no default task... the only task for now is grunt bump!');
    }
  });
};