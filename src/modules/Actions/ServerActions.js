var AppDispatcher = require('../AppDispatcher');
var TodoConstants = require('../AppConstants');

module.exports = {

  getTequila: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_TEQUILA,
      response: response
    });
  },
  getFabricante: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_FABRICANTE_RESPONSE,
      response: response
    });
  },
  postBotella: function(response){
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.POST_BOTELLA,
      response: response
    })
  }
};
