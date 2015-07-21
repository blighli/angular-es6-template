import Model from 'src/app/base/Model';


export default class Book extends Model {

  get id() {
    return this.data.get('id');
  }

  get title() {
    return this.data.get('volumeInfo').get('title');
  }

  get subtitle() {
    return this.data.get('volumeInfo').get('subtitle');
  }

  get description() {
    return this.data.get('volumeInfo').get('description');
  }

  get pageCount() {
    return this.data.get('volumeInfo').get('pageCount');
  }

  get author() {
    return this.data.get('volumeInfo').get('authors').first();
  }

  get image() {
    return this.data.get('volumeInfo').get('imageLinks').get('thumbnail');
  }

};
