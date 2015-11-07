safetyapp.controller('signInCtrl', ['$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.postSignIn = function(email, password) {
    console.log("The boys")
    var postData = { 'email': email, 'password': password };
      $http.post('https://immense-castle-3453.herokuapp.com/sessions', postData, 'POST').success(function(data) {
        $cookies.put("auth_key", data.auth_key);
        $cookies.put('user_id', data.user_id);
      });
    };
}]);
