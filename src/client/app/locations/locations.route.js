(function() {
    'use strict';

    angular
        .module('app.locations')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'locations',
                config: {
                    url: '/locations',
                    templateUrl: 'app/locations/locations.html',
                    controller: 'Locations',
                    controllerAs: 'vm',
                    title: 'locations'
                }
            }
        ];
    }
})();
