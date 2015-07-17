import angular from 'angular';
import 'src/app/_app';
import 'src/app/routes';

// directives
import 'src/app/navigation/mainNavigation/mainNavigation';
import 'src/app/books/latestBook/latestBook';
import 'src/app/books/bookList/bookList';
import 'src/app/books/bookDetail/bookDetail';


export default angular.module('AngularApp', [
  'AngularApp.app'
]).run(() => {
  //console.log('App running');
});
