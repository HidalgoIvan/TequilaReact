var AppDispatcher = require('../AppDispatcher');
var TodoConstants = require('../AppConstants');

module.exports = {

  getTequila: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_TEQUILA_RESPONSE,
      response: response
    });
  },
};
