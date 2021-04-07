console.log('starting postingstall.js')
console.log('__dirname)', __dirname)
console.log('process.cwd()', process.cwd())

var env = process.env;

Object.keys(env).forEach(function(key) {
  console.log('export ' + key + '="' + env[key] +'"');
});

// get it to print to the console: 
process.exit(1)