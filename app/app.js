'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'asideModule',
  'letterList',
  'mail',
  'letter',
  'contacts',
  'login'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/mail/inbox');

    $stateProvider
      .state('mail', {
        abstract: true,
        template: '<aside-component></aside-component><ui-view class="container"></ui-view>'
      })
      .state('mail.box', {
        url: '/mail/:box',
        template: '<letter-list></letter-list>'
      })
      .state('mail.letter', {
        url: '/mail/:box/:letterId',
        template: '<single-letter></single-letter>'
      })
      .state('mail.contacts', {
        url: '/contacts',
        template: '<contacts></contacts>'
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
  }])
  .run(['$rootScope', 'loginCheck', '$state', function ($rootScope, loginCheck, $state) {
    $rootScope.$on('$locationChangeStart', function (event) {
      if (!loginCheck.isAuthenticated()) {
        $state.go('login');
      }
    })
  }])
