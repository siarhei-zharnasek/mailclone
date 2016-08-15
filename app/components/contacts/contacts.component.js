angular
  .module('contacts')
  .component('contacts', {
    templateUrl: 'components/contacts/contacts.template.html',
    controller: ['Contacts', function (Contacts) {
      this.contacts = Contacts;
      console.dir(Contacts)
    }]
  })
