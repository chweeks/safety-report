safetyapp.controller('signUpCtrl', [ '$http', '$cookies', function($http, $cookies) {
  var self = this;

  self.postSignUp = function(email, password, passwordconf, name, address, primaryphone, secondaryphone, rank, crewmemtype, otheremployee) {
    $http({
      method: 'POST',
      url: 'https://immense-castle-3453.herokuapp.com/users',
      data: { email: email,
              password: password,
              password_confirmation: passwordconf,
              address: address,
              primary_phone: primaryphone,
              secondary_phone: secondaryphone,
              rank: rank,
              crew_member_aircraft_type: crewmemtype,
              other_employee_name: otheremployee
            }
    }).then(function successCallback(response) {
      $cookies.put('auth_key', response.auth_key);
      $cookies.put('user_id', response.user_id);
      console.log($cookies.get('auth_key'));
      console.log($cookies.get('user_id'));
    });
  };
}]);
