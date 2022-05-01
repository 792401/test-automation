module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: 'src/tests/api',
    //   reporters: [
    //       'default',
    //       [
    //           './node_modules/jest-html-reporter',
    //           {
    //               pageTitle: 'Test Report',
    //               includeFailureMsg: true,
    //               includeSuiteFailure: true,
    //               statusIgnoreFilter: 'pending',
    //               outputPath: './src/reporting/test-report.html',
    //               customScriptPath: './formatTestReport.js',
    //               styleOverridePath: './style.css'
    //           }
    //       ]
    //   ],

    bail: 10
};
