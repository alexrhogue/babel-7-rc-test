require('@babel/register')({
	ignore: [],
	babelrcRoots: [
	  ".",
	  "./node_modules/fake-module",
	]
});

require('./caller').default();
