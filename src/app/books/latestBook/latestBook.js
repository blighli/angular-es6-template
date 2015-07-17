import app from 'src/app/_app';
import BaseController from 'src/app/base/BaseController';
import template from './latestBook.tpl.html!text';

import booksActions from 'src/app/backend/books/BooksActions';
import booksStore from 'src/app/backend/books/BooksStore';


class Controller extends BaseController {
  init() {
    this.book = booksStore.state.get('latest');
    this.loading = booksStore.state.get('loading');

    this.addListener(booksStore.on('change', () => {
      this.book = booksStore.state.get('latest');
      this.loading = booksStore.state.get('loading');
    }));

    if (! this.book) {
      booksActions.fetchLatest();
    }
  }
}


export default app.directive('latestBook', () => {

  function link(scope) {
    scope.$on('$destroy', scope.cn.cleanup);
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
