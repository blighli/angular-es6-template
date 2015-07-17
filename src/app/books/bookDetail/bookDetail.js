import autobind from 'autobind-decorator';

import app from 'src/app/_app';
import BaseController from 'src/app/base/BaseController';
import template from './bookDetail.tpl.html!text';

import booksActions from 'src/app/backend/books/BooksActions';
import booksStore from 'src/app/backend/books/BooksStore';


class Controller extends BaseController {
  init() {
    this.setState();
    this.addListener(booksStore.on('change', this.setState));

    if (this.books.length === 0) {
      booksActions.fetchList();
    }
  }

  @autobind
  setState() {
    this.loading = booksStore.state.get('loading');
    this.books = booksStore.state.get('books').toJS();
    this.book = this.books.find(book => book.id === this.bookId);
  }
}


export default app.directive('bookDetail', () => {

  function link(scope) {
    scope.$on('$destroy', scope.cn.cleanup);
  }

  return {
    template: template,
    controller: Controller,
    controllerAs: 'cn',
    link: link,
    scope: {},
    bindToController: {
      bookId: '='
    }
  }
});
