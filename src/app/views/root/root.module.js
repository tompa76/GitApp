(function() {
  'use strict';

  angular.module('yoAngularJs.root', [])
    .config(function($stateProvider) {
      $stateProvider
        .state('root', {
          abstract: true,
          templateUrl: 'app/views/root/partials/root/root.html',
          controller: 'RootController',
          controllerAs: 'rootController',
          scope: {}
        })
    });
})();
