(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$state', 'logger', '$localStorage', 'loginService'];
    function Login($state, logger, $localStorage, loginService) {
        var vm = this;
        vm.title = 'Login';
        vm.errorMode = true;
        vm.isAvailable = loginService.isAvailable();

        vm.loginUser = function LoginUser() {
            loginService.loginUser(vm.username, vm.password).then(onLoginUserComplete, onServiceError);
            logger.info('Logging in user...');
        };

        function onLoginUserComplete(result) {
            if (result.data.Success)
            {
                $localStorage.User = result.data.Data;
                $state.go('home');
            }
            vm.error = result.data.Message;
        }

        function onServiceError(result) {
            $state.go('error', {message: result.data.Message});
        }
    }
})();
