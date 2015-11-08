safetyapp.controller('DynamicLoadingCtrl', [ function() {

  var self = this;

  var aircraftConfigArray = [ 'Aircraft Limit Exceedance',
                              'Airprox / TCAS',
                              'Altitude Deviation',
                              'ATC Incident',
                              'Automation',
                              'Configuration Warnings',
                              'EGPWS',
                              'Inadequate Terrain Clearance',
                              'Laser Beam exposure',
                              'Navigation Error',
                              'Speed Deviation',
                              'Stick Shaker / Stall Warning',
                              'Unstable Approach',
                              'Wake Turbulence' ]

  aircraftconfiguration = function(eventCategory) {
    for(var i=0; i < aircraftConfigArray.length; i++){
      if(aircraftConfigArray[i] == eventCategory){
        return true;
        break;
      }
    };
  };

  airproxtcas = function(eventCategory) {
    if (eventCategory == 'Airprox / TCAS') {
      return true
    }
  };

  altitudedeviation = function(eventCategory) {
    if (eventCategory == 'Altitude Deviation') {
      return true
    }
  };

  egpws = function(eventCategory) {
    if (eventCategory == 'EGPWS') {
      return true
    }
  };

  laserbeamquestionnaire = function(eventCategory) {
    if (eventCategory == 'Laser Beam exposure') {
      return true
    }
  };

  wildlifestrike = function(eventCategory) {
    if (eventCategory == 'Wildlife Strike') {
      return true
    }
  };

  firesparkssmokefumes = function(eventCategory) {
    if (eventCategory == 'Fire/Sparks/Smoke/Fumes') {
      return true
    }
  };

  waketurbulence = function(eventCategory) {
    if (eventCategory == 'Wake Turbulence') {
      return true
    }
  };

  systemfailure = function(eventCategory) {
    if (eventCategory == 'System Failure') {
      return true
    }
  };

  maintenanceerror = function(eventCategory) {
    if (eventCategory == 'maintenanceerror') {
      return true
    }
  };
}]);
