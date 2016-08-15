angular
  .module('asideModule')
  .component('asideComponent', {
    templateUrl: 'components/aside/aside.template.html',
    controller: ['Letters', '$state', function (Letters, $state) {
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

      this.openBox = function (box) {
        $state.go('box', { box: box })
      }

      this.openContacts = function () {
        $state.go('contacts');
      }
    }]
  })
