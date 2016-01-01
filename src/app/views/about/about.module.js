(function() {
  "use strict";

  angular.module('yoAngularJs.about', [
  ])
    .config(function($stateProvider) {
      $stateProvider
        .state('root.about', {
          url: "/about",
          templateUrl: "app/views/about/partials/about/about.html",
          controller: 'AboutController',
          controllerAs: 'aboutController',
          scope: {}
        })
    });

})();
