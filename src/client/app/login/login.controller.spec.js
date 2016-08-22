(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$state', 'logger'];
    /* @ngInject */
    function Login($state, logger) {
        var vm = this;
        vm.title = 'Login';
    }
})();
