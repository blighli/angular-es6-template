import BasePage from './BasePage';


export class HomePage extends BasePage {

  get route() {
    return '/home';
  }

  get latestBook() {
    return element(by.css('latest-book'));
  }

  get latestBookTitle() {
    return this.latestBook.element(by.css('h3'));
  }

  get latestBookDescription() {
    return this.latestBook.element(by.css('p.description'));
  }
}

export default new HomePage();
