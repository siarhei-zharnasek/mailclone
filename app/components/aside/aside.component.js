angular
  .module('asideModule')
  .component('asideComponent', {
    templateUrl: 'components/aside/aside.template.html',
    controller: ['Letters', '$state', 'Contacts', 'loginCheck', function (Letters, $state, Contacts, loginCheck) {
      var vm = this;

      Letters.inbox().then(function(response) {
        vm.inboxCount = response.data.length;
      });

      Letters.outbox().then(function(response) {
        vm.outboxCount = response.data.length;
      });

      Letters.trash().then(function(response) {
        vm.trashCount = response.data.length;
      });

      Contacts.then(function(response) {
        vm.contactsCount = response.length;
      });

      this.openBox = function (box) {
        $state.go('mail.box', { box: box })
      }

      this.logout = function () {
        loginCheck.logout();
      }
    }]
  })
