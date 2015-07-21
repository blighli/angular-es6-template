import Book from 'src/app/backend/books/Book';
import latestBookFixture from 'test/unit/fixtures/latestBook.json!';


describe('Book', () => {

  describe('an instance', () => {

    let subject;

    beforeEach(() => {
      subject = new Book(latestBookFixture.items[0]);
    });

    it('gives access to the title property', () => {
      expect(subject.title).toEqual('JavaScript objektorientiert');
    });

    it('gives access to the subtitle property', () => {
      expect(subject.subtitle).toEqual('Verständlicher, flexibler, effizienter programmieren');
    });

    it('gives access to the author property', () => {
      expect(subject.author).toEqual('Nicholas C. Zakas');
    });

  });

});
