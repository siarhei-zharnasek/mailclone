angular
  .module('login')
  .component('login', {
    templateUrl: 'components/login/login.template.html',
    controller: ['$state', 'loginCheck', '$scope', function ($state, loginCheck, $scope) {
      this.onSubmit = function () {
        if ($scope.login === 'test') {
          loginCheck.auth('test');
          $state.go('mail.box', { box: 'inbox' });
        }
      }
    }]
  })
