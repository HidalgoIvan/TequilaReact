// Todo actions
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../AppConstants');
var TequilaAPI = require('../TequilaAPI.js');

module.exports = {

  getTequila: function(tequila) {
    AppDispatcher.handleViewAction({
      actionType: Constants.GET_TEQUILA,
      tequila: tequila
    });

    TequilaAPI.get(tequila);
  },
  getFabricante: function(fabricante) {
    AppDispatcher.handleViewAction({
      actionType: Constants.GET_FABRICANTE,
      fabricante: tequila
    });

    TequilaAPI.getFabricantes(fabricante);
  }


};
