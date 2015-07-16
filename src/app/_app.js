import angular from 'angular';
import 'angular-ui-router';

export default angular.module('AngularApp.app', [
  'ui.router'
]).run(['$http', '$rootScope', '$state', ($http, $rootScope, $state) => {
  console.log('real app ist running');
}]);
