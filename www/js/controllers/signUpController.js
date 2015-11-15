safetyapp.controller('signUpCtrl', ['$http', '$cookies', '$state', function($http, $cookies, $state) {
  var self = this;

  self.postSignUp = function(email, password, passwordconf, name, address, primaryphone, secondaryphone, rank, crewmemtype, otheremployee) {
    var postData = { 'email': email, 'password': password, 'password_confirmation': passwordconf, 'name': name, 'address': address, 'primary_phone': primaryphone, 'secondary_phone': secondaryphone, 'rank': rank, 'crew_member_aircraft_type': crewmemtype, 'other_employee_name': otheremployee};
      $http.post('https://immense-castle-3453.herokuapp.com/users', postData, 'POST').success(function(data) {
        $cookies.put("auth_key", data.auth_key);
        $cookies.put('user_id', data.user_id);
        $state.go('form')
      });
    };
}]);
