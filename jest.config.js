module.exports = {
    transform: {
        '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
        '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@mocks(.*)$': '<rootDir>/__mocks__$1',
        '^@sections(.*)$': '<rootDir>/pageSections$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@test-utils(.*)$': '<rootDir>/src/test-utils$1',
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
        __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
    reporters: ['default', 'jest-junit'],
    verbose: true,
};
