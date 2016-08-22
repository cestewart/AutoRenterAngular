(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$state', 'logger', 'config'];
    function loginService($http, $state, logger, config) {
        return {
            isAvailable: isAvailable,
            loginUser: loginUser
        };
        function isAvailable() {
            return $http.get(config.apiUrl + '/api/login/')
                .then(getIsAvailableComplete)
                .catch(function() {
                    logger.error('/api/login get failed');
                    $state.go('error', {message: 'API is not available'});
                });

            function getIsAvailableComplete(data) {
                return data.data;
            }
        }

        function loginUser(username, password) {
            var data = {
                'Username': username,
                'Password': password
            };
            return $http.post(config.apiUrl + '/api/login/', data)
                .success(getLoginUserComplete)
                .error(function() {
                    logger.error('/api/login post failed');
                });

            function getLoginUserComplete(data) {
                return data.data;
            }
        }
    }
})();
