/* eslint-disable import/unambiguous, import/no-commonjs */
const defaults = require('../index');

module.exports = {
    ...defaults,
    rules: {
        ...defaults.rules,
        'at-rule-empty-line-before': null,
        'comment-empty-line-before': null,
        'custom-property-empty-line-before': 'never',
        'declaration-empty-line-before': 'never',
        'length-zero-no-unit': null,
        'no-missing-end-of-source-newline': null,
        'number-leading-zero': null,
        'number-no-trailing-zeros': null
    }
};
