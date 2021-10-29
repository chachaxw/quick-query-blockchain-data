module.exports = {
  testURL: 'http://localhost:3000',
  testEnvironment: './tests/PuppeteerEnvironment',
  verbose: false,
  extraSetupFiles: ['./tests/setupTests.js'],
  globals: {
    localStorage: null,
  },
};
