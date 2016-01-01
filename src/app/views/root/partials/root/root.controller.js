(function() {
  'use strict';

  angular.module('yoAngularJs.root')
    .controller('RootController', rootController);

  function rootController($state) {
    var vm = this;
    vm.state = $state;


  }
})();
