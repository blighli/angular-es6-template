import angular from 'angular';
import 'angular-ui-router';

import {setHttp} from 'src/app/utils/http';
import {setRootScope} from 'src/app/utils/rootScope';
import {setState} from 'src/app/utils/state';
import {setupPromise} from 'src/app/utils/promise';

import Actions from 'src/app/base/Actions';
import Store from 'src/app/base/Store';

export default angular.module('AngularApp.app', [
  'ui.router'
])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.useXDomain = true;
  }])

  .run(['$http', '$rootScope', '$state', ($http, $rootScope, $state) => {
    // make all necessary angular injectables accessible by rest of application
    setHttp($http);
    setRootScope($rootScope);
    setupPromise($rootScope);
    setState($state);
  }]);
