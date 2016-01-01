(function() {
  "use strict";

  angular.module('yoAngularJs.home', [
  ])
    .config(function($stateProvider) {
      $stateProvider
        .state('root.home', {
          url: "/home",
          templateUrl: "app/views/home/partials/home/home.html",
          controller: 'HomeController',
          controllerAs: 'homeController',
          scope: {}
        })
    });

})();
