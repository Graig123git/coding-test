require('ignore-styles');

require('@babel/register')({
	ignore: [/(node_module)/],
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [['@babel/transform-runtime']],
});

require('./server');
