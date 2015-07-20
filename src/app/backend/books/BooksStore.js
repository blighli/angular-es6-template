import autobind from 'autobind-decorator';

import Store from 'src/app/base/Store';
import booksActions from './BooksActions';
import Book from './Book';


class BooksStore extends Store {

  init() {
    this.state = {
      books: [],
      latest: null,
      error: null,
      loading: false
    };

    booksActions.on('fetchLatest.start', this.onFetchLatestStart);
    booksActions.on('fetchLatest.success', this.onFetchLatestSuccess);
    booksActions.on('fetchLatest.error', this.onFetchLatestError);

    booksActions.on('fetchList.start', this.onFetchListStart);
    booksActions.on('fetchList.success', this.onFetchListSuccess);
    booksActions.on('fetchList.error', this.onFetchListError);
  }

  @autobind
  onFetchLatestStart() {
    this.state = {
      latest: null,
      error: null,
      loading: true
    };
  }

  @autobind
  onFetchLatestSuccess(data) {
    this.state = {
      latest: new Book(data.items[0]),
      error: null,
      loading: false
    };
  }

  @autobind
  onFetchLatestError(error) {
    this.state = {
      latest: null,
      error: error,
      loading: false
    };
  }

  @autobind
  onFetchListStart() {
    this.state = {
      books: [],
      error: null,
      loading: true
    };
  }

  @autobind
  onFetchListSuccess(data) {
    console.log('hier suc2', data);
    let books = data.items.map(item => new Book(item));

    this.state = {
      books: books,
      error: null,
      loading: false
    };

  }

  @autobind
  onFetchListError(error) {
    this.state = {
      books: [],
      error: error,
      loading: false
    };
  }

}

export default new BooksStore()
