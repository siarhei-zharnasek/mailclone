'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'asideModule',
  'letterList',
  'mail',
  'letter',
  'contacts'
])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
      .state('box', {
        url: '/:box',
        template: '<letter-list></letter-list>'
      })
      .state('letter', {
        url: '/:box/:letterId',
        template: '<single-letter></single-letter>'
      })
      .state('contacts', {
        url: '/contacts',
        template: '<contacts></contacts>'
      })
}]);
