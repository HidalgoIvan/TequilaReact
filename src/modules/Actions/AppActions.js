// Todo actions
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../AppConstants');
var WheatherAPI = require('../WheatherAPI.js');

module.exports = {

  getWheather: function(city) {
    AppDispatcher.handleViewAction({
      actionType: Constants.GET_TEQUILA,
      tequila: city
    });

    TequilaAPI.get(tequila);
  }

};
