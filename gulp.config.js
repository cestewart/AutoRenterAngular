module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var server = './src/server/';
    var temp =  './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];

    var config = {
        //all js to vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        htmlTemplates: clientApp + '**/*.html',
        images: client + '/images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        temp: temp,
        browserReloadDelay: 1000,
        root: root,
        server: server,
        optimizedFiles: {
            app: 'app.js',
            lib: 'lib.js'
        },
        templateCache: {
            file: 'template.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],
        report: report,
        defaultPort: 7203,
        nodeServer: './src/server/app.js',
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js']
    };
    config.getWiredepDefaultOptions = function() {
        return {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
    };

    config.karma = getKarmaOptions();
    return config;
    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'}
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
