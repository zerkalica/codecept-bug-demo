
exports.config = {
    tests: './src/**/*.e2e.js',
    output: './output',
    timeout: 30000,
    helpers: {
        Puppeteer: {
            url: 'https://codecept.io',
            show: true
        },
        MockRequest: {

        }
    },
    bootstrap: null,
    mocha: {},
    name: 'codecept-bug-demo'
};
