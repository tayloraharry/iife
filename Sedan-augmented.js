var Sedan = (function(newSedan){
  var max_occupancy = 6;
  var current_occpancy = 0;

  var type="minivan";

  newSedan.getOccupancy = function(){
    return current_occpancy;
  };

  newSedan.setOccupancy = function(occupancy){
    if(occupancy <= max_occupancy) {
      current_occpancy = occupancy;
    } else {
      throw "Cannot exceed max occupancy of " + max_occupancy;
    }
  }

  Sedan.getType = function(){
    return "minivan";
  }

  return newSedan;
})(Sedan || {});