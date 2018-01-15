const path = require('path');

module.exports = {
  entry : path.join(__dirname, 'app', 'App.js'),
  output : {
    path : path.join( __dirname, 'dist' ),
    filename : "bundle.js",
    // library : "my"
  },
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool : 'inline-source-map',
  devServer : {
    contentBase : path.join( __dirname, 'dist' ),
    port : 9000,
    stats : "errors-only",
    open : true 
  },
};
