/*
 * grunt-nodecopter
 * https://github.com/andrew/grunt-nodecopter
 *
 * Copyright (c) 2013 Andrew Nesbitt
 * Licensed under the MIT license.
 */

'use strict';

var Nodecopter = require('nodecopter')

module.exports = function(grunt) {

  grunt.registerTask('nodecopter', 'Your task description goes here.', function() {
    var options = grunt.config.get('nodecopter').options
    
    var done = this.async
    grunt.log.writeln('Fly my pretties!!!');
    
    Nodecopter.demo(options, function(){
      console.log('Finished!')
      done()
    })
  });

};
