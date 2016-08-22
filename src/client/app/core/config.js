(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[Auto Renter Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Auto Renter',
        imageBasePath: '/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg',
        apiUrl: 'http://localhost:20374'//'http://autorenterapi.azurewebsites.net'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure ($compileProvider, $logProvider, routerHelperProvider, exceptionHandlerProvider) {
        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        configureStateHelper();

        ////////////////

        function configureStateHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['dataservice'];
            /* @ngInject */
            function ready(dataservice) {
                return dataservice.ready();
            }

            routerHelperProvider.configure({
                docTitle: 'Auto Renter: ',
                resolveAlways: resolveAlways
            });
        }
    }
})();
