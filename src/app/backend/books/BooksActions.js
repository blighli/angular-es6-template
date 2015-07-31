import Actions from 'src/app/base/Actions';
import request from 'src/app/backend/restCommunication';
import latestBookSchema from 'src/app/backend/schema/latestBook';

export class BooksActions extends Actions {

  fetchLatest() {
    return request.get('https://www.googleapis.com/books/v1/volumes?q=subject:javascript&maxResults=1&orderBy=newest', {}, {
      schema: latestBookSchema
    });
  }

  fetchList(pageNo=0){
    let startIndex = pageNo * 20;
    return request.get(`https://www.googleapis.com/books/v1/volumes?q=subject:javascript&startIndex=${startIndex}`);
  }

  search(query='') {

  }
}

export default new BooksActions();
