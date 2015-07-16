import router from 'angular-ui-router';
import app from 'src/app/_app';

import homeTemplate from 'src/app/home/templates/home.tpl.html!text';


export default app.config(['$stateProvider', '$urlRouterProvider' , ($stateProvider, $urlRouterProvider) => {
  console.log('setting up routes');

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      template: homeTemplate
    })
    .state('foo', {
      url: "/foo",
      template: "TODO!!!"
    })
}]);
