(function() {
  'use strict';

  angular
    .module('yoAngularJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
