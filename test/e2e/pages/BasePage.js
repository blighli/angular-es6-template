import settings from '../settings';


export default class BasePage {

  get route() {
    throw new Error('Implement in subclass.');
  }

  get url() {
    return `${settings.baseUrl}#${this.route}`
  }

  loadPage() {
    browser.get(this.url);
  }

}
