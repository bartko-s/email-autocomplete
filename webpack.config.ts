import * as path from 'path';
import * as webpack from 'webpack'
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

function buildConfig(isDevelopment: boolean) {
    return {
        mode: 'none',
        cache: isDevelopment,
        devtool: isDevelopment ? 'eval-source-map' : false,
        entry: './lib/email-autocomplete.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'email-autocomplete.min.js',
            libraryTarget: 'umd',
            library: 'EmailAutocomplete',
            publicPath: '/dist'
        },
        module: {
            rules: [
                {
                    test: /\.(t|j)s?$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: [ '.ts', '.js' ],
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        devServer: {
            contentBase: path.join(__dirname, './'),
            overlay: true,
            hot: true,
            host: '0.0.0.0',
            port: 8080
        },
    };
}

export default function(env: undefined, argv: webpack.Configuration) {
    const config = buildConfig(argv.mode === 'development');
    // console.log(config);
    return config
}