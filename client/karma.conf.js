// karma.conf.js
module.exports = function (config) {
    config.set({
        files: [
            "app/**/*.js",
            "test/**/*.js"
        ],

        // coverage reporter generates the coverage
        reporters: ["progress", "coverage"],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            "app/**/*.js": ["coverage"]
        },

        // optionally, configure the reporter
        coverageReporter: {
            instrumenters: {isparta: require("isparta")},
            instrumenter: {"**/*.js": "isparta"},
            type: "html",
            dir: "coverage/"
        }
    });
};