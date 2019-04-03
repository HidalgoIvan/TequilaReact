// Todo actions
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../AppConstants');
var WheatherAPI = require('../WheatherAPI.js');

module.exports = {

  getWheather: function(city) {
    AppDispatcher.handleViewAction({
      actionType: Constants.GET_WHEATHER,
      city: city
    });

    WheatherAPI.get(city);
  }

};
