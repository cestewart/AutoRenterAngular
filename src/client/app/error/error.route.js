(function() {
    'use strict';

    angular
        .module('app.error')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'error',
                config: {
                    url: '/:message',
                    templateUrl: 'app/error/error.html',
                    controller: 'Error',
                    controllerAs: 'vm',
                    title: 'error',
                    settings: {
                        nav: 1
                    }
                }
            }
        ];
    }
})();
