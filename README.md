# Important

This is a fork of `docco-husky`. The main differences are that this is using [prettify](https://code.google.com/p/google-code-prettify/) to 
do the syntax highlighting and also the `cloc/perl` part is removed you can get a better report of lines of code and 
code complexity with [grunt-plato](https://www.npmjs.org/package/grunt-plato).
 
Also I aim to rewrite this back in javascript... Just for fun (And because nowadays "you might not need coffeescript")

Overview
--------

A streamlined static site generator for project documentation based on [Docco](http://jashkenas.github.com/docco/). "Husky" because it's bigger and more irregular than Docco, like [Husky](http://www.wisegeek.com/what-is-a-husky-size-in-clothing.htm) Jeans you would buy at Sears back in the day.

A fork of [Docco](http://jashkenas.github.com/docco/), intended to go beyond the appropriate scope of Docco itself. Forked because Docco itself is pretty simple and this is intended to diverge. The initial fork included merged pull requests from [nevir](https://github.com/nevir) and [jswartwood](https://github.com/jswartwood) for their work on supporting recursive directories and an improved "Jump To" menu.


Examples
--------

Check out the [generated documentation](http://mbrevoort.github.com/docco-husky/docco-husky/readme.html) for this project.

Or these other samples

* [batman.js](http://mbrevoort.github.com/docco-husky/batman/readme.html) 
* [backbone.js](http://mbrevoort.github.com/docco-husky/backbone/readme.html) 

Installation
------------

### Possible Gotchas

* ~~Docco requires [Pygments](http://pygments.org/) to be installed and will try to install it if it's not already.~~ 
  This fork uses [prettify](https://code.google.com/p/google-code-prettify/) to do the source syntax highlighting. 
* ~~Perl is required for [cloc](http://cloc.sourceforge.net/)~~. This fork removes this. You can use [grunt-plato](https://www.npmjs.org/package/grunt-plato)

To install via npm into your project:

	npm install docco-husky-plus

Install globally:

	[sudo] npm install -g docco-husky-plus

Or include as a dependency in your package.json

Generating Documentation
------------------------

docco-husky will generate docs in a ./docs directory. It accepts multiple files (including 
wildcards) and directories for it to recurse.

	docco-husky -name "<optional project name>" <list of files>

Optional configuration in your package.json. The project name can alternatively be passed in the package.json configuration and it will override the value passed in the <code>-name</code> option.

	"docco_husky": {
		"css": "path/to/alternative/css/file.css"
    	"output_dir": "docs/out",				    // default "docs"
    	"content_dir": "docs/my_markdown_files",    // default null
    	"project_name": "Your Project name",
		"show_timestamp": true                      // default true
  	}

### Examples

	# from a local install
	./node_modules/.bin/docco-husky app.js lib public
	
	# with a project name
	./node_modules/.bin/docco-husky -name "My Project" app.js lib public
	
	# with wildcards
	./node_modules/.bin/docco-husky -name "My Project" *.js lib public
	
	# with global install
	docco-husky -name "My Project" *.js lib public
			

### Other Markdown Content

<code>docco-husky</code> can also include other markdown content from your project. It expects the markdown files to be in a specified directory configured with <code>content_dir</code>. It walks the directory recursively and puts the resulting files in your the <code>output_dir</code> root including a relative subdirectory.

You can manually link to these files from your README.md or optionally if there is a <code>content_index.md</code> file in your <code>content_dir</code> directory, this will be injected into the package.json section of the main page just below the module name and description in <code>index.html</code>. This is a convenient way to reference any additional documents in your <code>index.html</code> that you don't want in your README.md file. One reason you may not want links in your README.md file is that these relative links will not resolve when Github renders your project's README.md file.

Output
------------------------

docco-husky will write generated files to ./docs by default or to the directory specified in the package.json config as <code>output_dir</code>

For all source files, the output will be like 
<base>.<ext> (e.g. foo.js) -->  <base>.html (e.g. foo.html).

An index.html will be generated and will include a formatted version of a 
README.md if your project includes it, some details from the a package.json file, 
and project stats generated by cloc.

Single line comments will only be parsed with the exception os Javascript (as of 0.2.0) which
is in an early experimental state. 