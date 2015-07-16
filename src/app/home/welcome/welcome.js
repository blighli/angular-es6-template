import moment from 'moment';
import app from 'src/app/_app';
import template from './welcome.tpl.html!text';


class Controller {
  constructor($interval) {

    this.firstName = 'Arthur';
    console.log('lastName bound even before constructor', this);
    this.currentTime = this.getCurrentTime();

    $interval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  getCurrentTime() {
    return moment().format('HH:mm:ss');
  }
}

Controller.$inject = ['$interval'];


export default app.directive('welcome', () => {

  return {
    template: template,
    controller: Controller,
    controllerAs: 'cn',
    scope: {},
    bindToController: {
      lastName: '@'
    }
  }
});
