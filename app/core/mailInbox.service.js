angular
  .module('mail')
  .factory('Letters', ['$http', function ($http) {
    return {
      inbox: function () {
        return $http.get('letters/inbox.json');
      },
      outbox: function () {
        return $http.get('letters/outbox.json');
      },
      trash: function () {
        return $http.get('letters/trash.json');
      },
    }
  }])
  .factory('Contacts', ['$http', function ($http) {
    /*var result = [];
    var set = new Set();

    (function () {
      $http.get('letters/inbox.json')
        .then(res => result.concat(res.data))
        .then(() => {
          $http.get('letters/outbox.json')
            .then(res => result = result.concat(res.data))
            .then(() => {
              $http.get('letters/trash.json')
                .then(res => result = result.concat(res.data))
                .then(() => {
                  result.forEach(node => set.add(node.author))
                })
            })
        })
    })();

    return set;*/
    return [{'author': '1'}, {'author': '2'}]
  }])
