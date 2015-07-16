import angular from 'angular';
import 'src/app/_app';
import 'src/app/routes';

import 'src/app/home/welcome/welcome';

export default angular.module('AngularApp', [
  'AngularApp.app'
]).run(() => {
  console.log('App running');
});
