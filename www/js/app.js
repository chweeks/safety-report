// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
safetyapp = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

safetyapp.directive('aircraftConfiguration', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/aircraftConfiguration.html";

    return directive;
});

safetyapp.directive('airproxTCAS', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/airproxTCAS.html";

    return directive;
});

safetyapp.directive('altitudeDeviation', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/altitudeDeviation.html";

    return directive;
});

safetyapp.directive('crewInformation', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/crewInformation.html";

    return directive;
});

safetyapp.directive('egpws', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/EGPWS.html";

    return directive;
});

safetyapp.directive('eventCategory', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventCategory.html";

    return directive;
});

safetyapp.directive('eventDescription', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventDescription.html";

    return directive;
});

safetyapp.directive('eventId', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventId.html";

    return directive;
});

safetyapp.directive('fireSparksSmokeFumes', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/fireSparksSmokeFumes.html";

    return directive;
});

safetyapp.directive('flightDetails', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/flightDetails.html";

    return directive;
});

safetyapp.directive('flightIdentification', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/flightIdentification.html";

    return directive;
});

safetyapp.directive('laserBeamQuestionnaire', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/laserBeamQuestionnaire.html";

    return directive;
});

safetyapp.directive('maintenanceError', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/maintenanceError.html";

    return directive;
});

safetyapp.directive('meterologicalInfo', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/meterologicalInfo.html";

    return directive;
});

safetyapp.directive('reportInfo', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/reportInfo.html";

    return directive;
});

safetyapp.directive('signUp', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/signUp.html";

    return directive;
});

safetyapp.directive('systemFailure', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/systemFailure.html";

    return directive;
});

safetyapp.directive('wakeTurbulence', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/wakeTurbulence.html";

    return directive;
});

safetyapp.directive('wildlifeStrike', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/wildlifeStrike.html";

    return directive;
});
