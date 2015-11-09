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

  self.aircraftconfiguration = function(eventCategory) {
    for(var i=0; i < aircraftConfigArray.length; i++){
      if(aircraftConfigArray[i] == eventCategory){
        return true;
        break;
      }
    };
  };

  self.airproxtcas = function(eventCategory) {
    if (eventCategory == 'Airprox / TCAS') {
      return true
    }
  };

  self.altitudedeviation = function(eventCategory) {
    if (eventCategory == 'Altitude Deviation') {      
      return true
    }
  };

  self.egpws = function(eventCategory) {
    if (eventCategory == 'EGPWS') {
      return true
    }
  };

  self.laserbeamquestionnaire = function(eventCategory) {
    if (eventCategory === 'Laser Beam Exposure') {
      return true
    }
  };

  self.wildlifestrike = function(eventCategory) {
    if (eventCategory == 'Wildlife Strike') {
      return true
    }
  };

  self.firesparkssmokefumes = function(eventCategory) {
    if (eventCategory == 'Fire / Sparks / Smoke / Fumes') {
      return true
    }
  };

  self.waketurbulence = function(eventCategory) {
    if (eventCategory == 'Wake Turbulence') {
      return true
    }
  };

  self.systemfailure = function(eventCategory) {
    if (eventCategory == 'System Failure') {
      return true
    }
  };

  self.maintenanceerror = function(eventCategory) {
    if (eventCategory == 'Maintenance Error') {
      return true
    }
  };
}]);
