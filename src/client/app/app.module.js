(function() {

    'use strict';

    var autoRenterApp = angular.module('app', [
        /* Shared modules */
        'app.core',
        'app.widgets',
        /* Third party */
        'ngStorage',
        /* Feature areas */
        'app.customers',
        'app.dashboard',
        'app.login',
        'app.home',
        'app.locations',
        'app.vehicles',
        'app.error',
        'app.layout'
    ]);
    autoRenterApp.run(['$http','$localStorage', function($http, $localStorage) {
        if ($localStorage.User)
        {
            $http.defaults.headers.common['BearerToken'] = $localStorage.User.BearerToken;
        }
    }]);
    autoRenterApp.run(['$rootScope', '$state', '$localStorage', function($rootScope, $state, $localStorage) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {
                if (!$localStorage.User && (toState.name !== 'login' && toState.name !== 'error')) {
                    event.preventDefault();
                    $state.go('login');
                }
            });
    }]);
})();
