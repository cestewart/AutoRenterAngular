(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    Home.$inject = ['logger'];
    function Home(logger) {
        var vm = this;
        vm.title = 'Home';
    }
})();
