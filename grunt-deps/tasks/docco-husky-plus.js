module.exports = function (grunt, pkg, opts) {
  'use strict';
  var gruntTaksUtils = opts.gruntTaskUtils;

  gruntTaksUtils.registerTasks({
    'docco-husky-plus': {
      description: '',
      multiTask: function () {
        var me = this;
        var data = me.data;

        var options = me.options({
          show_timestamp: true,
          output_dir: data.dest,
          project_name: "Unknown Project",
          sources: grunt.file.expand(data.src)
        });

        options.docFiles = grunt.file.expand(data.docFiles)

        var done = me.async();

        var doccoHuskyPlus = require('../../lib/docco.js');

        try {
          doccoHuskyPlus.generateDocs(options, done);
        }
        catch(ex) {
          grunt.fail.warn('cannot generate the docs');
          done(false);
        }
      }
    }
  })
};