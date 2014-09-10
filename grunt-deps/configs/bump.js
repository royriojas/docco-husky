module.exports = function ( grunt, pkg, opts ) {
  return {
    options: {
      files: [ 'package.json' ],
      commit: true,
      commitMessage: 'BLD: Release v%VERSION%',
      commitFiles: [ 'package.json' ],
      createTag: true,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: true,
      pushTo: 'origin master',
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
    }
  };
};
