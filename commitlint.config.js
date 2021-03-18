module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'references-empty': [2, 'never'],
        'subject-case': [2, 'always', ['sentence-case']],
        'subject-full-stop': [0, 'always', ['.']],
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['[A-Z]{2,10}-'],
        },
    },
    ignores: [message => message.includes(`NO-TICKET`)],
};
