module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    plugins: ['prettier', 'import'],
    // Temporal fix, this is solved upgrading Gatsby:
    // https://github.com/gatsbyjs/gatsby/issues/26319
    ignorePatterns: ['**/_this_is_virtual_fs_path_/**/*.js'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-curly-newline': 0,
        'no-return-assign': 0,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@assets', './src/assets'],
                    ['@cms', './src/cms'],
                    ['@images', './src/images'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
