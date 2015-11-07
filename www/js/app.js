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

safetyapp.directive('aircraftconfiguration', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/aircraftconfiguration.html";

    return directive;
});

safetyapp.directive('airproxtcas', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/airproxtcas.html";

    return directive;
});

safetyapp.directive('altitudedeviation', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/altitudedeviation.html";

    return directive;
});

safetyapp.directive('crewinformation', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/crewinformation.html";

    return directive;
});

safetyapp.directive('egpws', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/egpws.html";

    return directive;
});

safetyapp.directive('eventcategory', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventcategory.html";

    return directive;
});

safetyapp.directive('eventdescription', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventdescription.html";

    return directive;
});

safetyapp.directive('eventid', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/eventid.html";

    return directive;
});

safetyapp.directive('firesparkssmokefumes', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/firesparkssmokefumes.html";

    return directive;
});

safetyapp.directive('flightdetails', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/flightdetails.html";

    return directive;
});

safetyapp.directive('flightidentification', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/flightidentification.html";

    return directive;
});

safetyapp.directive('laserbeamquestionnaire', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/laserbeamquestionnaire.html";

    return directive;
});

safetyapp.directive('maintenanceerror', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/maintenanceerror.html";

    return directive;
});

safetyapp.directive('meterologicalinfo', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/meterologicalinfo.html";

    return directive;
});

safetyapp.directive('reportinfo', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/reportinfo.html";

    return directive;
});

safetyapp.directive('signup', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/signup.html";

    return directive;
});

safetyapp.directive('systemfailure', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/systemfailure.html";

    return directive;
});

safetyapp.directive('waketurbulence', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/waketurbulence.html";

    return directive;
});

safetyapp.directive('wildlifestrike', function() {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "../templates/wildlifestrike.html";

    return directive;
});
