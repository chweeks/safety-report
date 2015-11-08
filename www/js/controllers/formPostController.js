safetyapp.controller('formPostCtrl', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.postFormData = function(email, password) {
    console.log("The boys")
    var postData = { 'email': email, 'password': password };
      $http.post('https://immense-castle-3453.herokuapp.com/events', postData, 'POST');

        $cookies.get('auth_key');
      });
    };
}]);
