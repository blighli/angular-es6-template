import app from 'src/app/_app';
import BaseController from 'src/app/base/BaseController';
import template from './bookList.tpl.html!text';

import booksActions from 'src/app/backend/books/BooksActions';
import booksStore from 'src/app/backend/books/BooksStore';


class Controller extends BaseController {
  init() {
    this.books = booksStore.state.get('books').toJS();
    this.loading = booksStore.state.get('loading');

    this.addListener(booksStore.on('change', () => {
      this.books = booksStore.state.get('books').toJS();
      this.loading = booksStore.state.get('loading');
    }));

    if (this.books.length === 0) {
      booksActions.fetchList();
    }
  }
}


export default app.directive('bookList', () => {

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
