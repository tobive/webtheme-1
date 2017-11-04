const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/css/styles.css'),
  output: {
    path: path.resolve(__dirname, 'public/css'),
    filename: 'styles.css'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style!css!pleeease",
            options: {
              minifier: true
            }
          }
        ]
      }
    ]
  }
};
