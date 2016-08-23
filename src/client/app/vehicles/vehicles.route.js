(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/');
    }

    function getStates() {
        return [
            {
                state: 'vehicles',
                config: {
                    url: '/vehicles',
                    templateUrl: 'app/vehicles/vehicles.html',
                    controller: 'Vehicles',
                    controllerAs: 'vm',
                    title: 'vehicles'
                }
            }
        ];
    }
})();
