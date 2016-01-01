(function() {
  'use strict';

  angular
    .module('yoAngularJs', [
      //Third party modules
      'ngAnimate',
      'ngTouch',
      'ngMessages',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',

      //Models
      'yoAngularJs.models',

      //Views
      'yoAngularJs.root',
      'yoAngularJs.home',
      'yoAngularJs.about',
      'yoAngularJs.contacts'
  ]);

})();
