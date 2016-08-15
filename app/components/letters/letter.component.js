angular
  .module('letter')
  .component('singleLetter', {
    templateUrl: 'components/letters/letter.template.html',
    controller: ['Letters', '$stateParams', function(Letters, $stateParams) {
      let index = $stateParams.letterId,
          box = $stateParams.box;
      var vm = this;

      Letters[box]().then(res => vm.letter = res.data[index]);
      this.index = index;
    }]
  })
