const {Before} = require('@cucumber/cucumber');

Before({ tags: '@ignore' }, async function () {
    return 'skipped';
});
