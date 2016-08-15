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
  .factory('Contacts', ['$http', '$q', function ($http, $q) {
    var result = [];

    return $q.all([
      $http.get('letters/inbox.json'),
      $http.get('letters/outbox.json'),
      $http.get('letters/trash.json')
      ])
      .then(response => {
        response.forEach((item) => result = result.concat(item.data));
        var temp = new Set(result);
        result = [];
        temp.forEach(item => result = result.concat(item));
        return result;
      });
  }])
  .service('loginCheck', ['$cookies', '$state', function ($cookies, $state) {
    this.isAuthenticated = function () {
      return $cookies.get('login') ? true : false;
    }

    this.auth = function (login) {
      $cookies.put('login', login);
    }

    this.logout = function () {
      $cookies.remove('login');
      $state.go('login');
    }
  }])
