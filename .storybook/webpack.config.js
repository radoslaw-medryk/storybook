module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                enforce: 'pre',
            },
        ],
    },
};
