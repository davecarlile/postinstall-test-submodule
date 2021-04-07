console.log('starting postingstall.js')
console.log('__dirname)', __dirname)
console.log('process.cwd()', process.cwd())
pak = require(process.env.npm_package_json)
console.log(JSON.stringify(pak))
var env = process.env;

Object.keys(env).forEach(function(key) {
  console.log('export ' + key + '="' + env[key] +'"');
});

// get it to print to the console: 
process.exit(1)