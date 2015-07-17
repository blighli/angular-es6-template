import router from 'angular-ui-router';
import app from 'src/app/_app';

import homeTemplate from 'src/app/home/templates/home.tpl.html!text';
import listTemplate from 'src/app/home/templates/list.tpl.html!text';
import detailTemplate from 'src/app/home/templates/detail.tpl.html!text';

export default app.config(['$stateProvider', '$urlRouterProvider' , ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      template: homeTemplate
    })
    .state('list', {
      url: "/list",
      template: listTemplate
    })
    .state('detail', {
      url: "/detail/:id",
      template: detailTemplate,
      controllerAs: 'cn',
      controller: ['$stateParams', function($stateParams) {
        this.bookId = $stateParams.id;
      }]
    })
    .state('search', {
      url: "/search",
      template: "TODO!!!"
    })
}]);
