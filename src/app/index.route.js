(function() {
  'use strict';

  angular
    .module('yoAngularJs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home');
  }

})();
