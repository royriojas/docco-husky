//
// # App Grunt File
//
module.exports = function ( grunt ) {
  'use strict';

  // load the config-loader function and pass the grunt object
  require( 'build-workflow' )( grunt, {
    loadBaseTasksAndConfigs : false
  } );

};
