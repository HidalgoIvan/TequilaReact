var AppDispatcher = require('../AppDispatcher');
var TodoConstants = require('../AppConstants');

module.exports = {

  getWheather: function(response) {
    AppDispatcher.handleServerAction({
      actionType: TodoConstants.GET_WHEATHER_RESPONSE,
      response: response
    });
  },
};
