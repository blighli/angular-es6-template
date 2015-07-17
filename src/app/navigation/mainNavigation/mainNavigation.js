import app from 'src/app/_app';
import BaseController from 'src/app/base/BaseController';
import template from './mainNavigation.tpl.html!text';


class Controller extends BaseController {

  constructor() {
    super();

    this.navigation = [
      { state: 'home', label: 'Home', symbol: 'home' },
      { state: 'list', label: 'List Books', symbol: 'list' },
      { state: 'search', label: 'Search', symbol: 'search' }
    ];
  }

}


app.directive('mainNavigation', () => {

  function link(scope) {
    scope.cn.cleanup();
  }

  return {
    template: template,
    controller: Controller,
    controllerAs: 'cn',
    link: link,
    scope: {},
    bindToController: {}
  }
});
