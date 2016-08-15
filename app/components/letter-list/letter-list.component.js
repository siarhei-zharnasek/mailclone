angular
  .module('letterList')
  .component('letterList', {
    templateUrl: 'components/letter-list/letter-list.template.html',
    controller: ['Letters', '$state', '$stateParams', function(Letters, $state, $stateParams) {
      var box = $stateParams.box;
      var vm = this;
      this.box = box;
      Letters[box]().then(response => vm.letters = response.data);

      this.openLetter = function (letterId, box) {
        $state.go('mail.letter', { box: box, letterId: letterId })
      }
    }]
  });
