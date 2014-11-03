module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  return {
    docs: {
      docFiles : ['md/**/*.md'],
      src: [
        'test/**/*.*',
        'lib/docco.js'
      ],
      dest: 'documentation'
    }
  };
};