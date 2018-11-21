const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    const isProduction = env.mode === "production";
    env.mode = isProduction
        ? "production"
        : "development";

    return {
        mode: env.mode,
        entry: "./src/index.tsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist"
        },

        devtool: "source-map",

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.tsx?$/,
                    use: {
                        loader: "tslint-loader",
                        options: {
                            emitErrors: true
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: "[name]-[local]-[hash:6]",
                                importLoaders: 1,
                                camelCase: true
                            }
                        },
                        "sass-loader"
                    ]
                }
            ]
        },

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },

        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: "src/index.html"
            })
        ]
    };
};
