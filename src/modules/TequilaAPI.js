
var ServerActions = require('./Actions/ServerActions');
var request = require('superagent');

module.exports = {

  get: function(city) {
    request.get('https://my-json-server.typicode.com/NorbiRm/alexa-JSONServiceExample/botellas')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        ServerActions.getWheather(response.body);
      });
  }
};