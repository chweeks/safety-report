safetyapp.controller('signUpCtrl', ['$http', '$cookies', '$state', function($http, $cookies, $state) {
  var self = this;

  self.postSignUp = function(username, password, passwordconf) {
    var postData = { 'username': username, 'password': password, 'password_confirmation': passwordconf};
      $http.post('https://immense-castle-3453.herokuapp.com/users', postData, 'POST').success(function(data) {
        $cookies.put("auth_key", data.auth_key);
        $cookies.put('user_id', data.user_id);
        $state.go('form')
      });
    };
}]);
