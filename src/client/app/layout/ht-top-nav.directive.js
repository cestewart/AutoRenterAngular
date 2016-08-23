(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    htTopNav.$inject = ['$state', '$localStorage'];

    function htTopNav ($state, $localStorage) {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'tagline': '=',
                'title': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        function TopNavController($state, $localStorage) {
            var vm = this;
            if ($localStorage.User) {
                vm.showLogout = true;
            }

            vm.logout = function() {
                vm.showLogout = false;
                $localStorage.User = undefined;
                $state.go('login');
            };
        }

        return directive;
    }
})();
