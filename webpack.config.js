const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = ( env, options ) => {
    return {
        entry: './src/components/game.js',

        output: {
            path: path.resolve( __dirname, 'dist' ),
            filename: 'bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.jsx$|\.es6$|\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                        }
                    },
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.css$/,
                    loader:[ 'style-loader', 'css-loader' ]
                }
            ]
        }
    }
};
