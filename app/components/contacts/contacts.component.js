angular
  .module('contacts')
  .component('contacts', {
    templateUrl: 'components/contacts/contacts.template.html',
    controller: ['Contacts', function (Contacts) {
      var vm = this;
      Contacts.then((res) => vm.contacts = res);
    }]
  })
