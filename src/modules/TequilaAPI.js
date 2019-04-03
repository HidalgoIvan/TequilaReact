
var ServerActions = require('./Actions/ServerActions');
var request = require('superagent');

module.exports = {

  get: function(tequila) {
    request.get('https://my-json-server.typicode.com/HidalgoIvan/TequilaReact/botellas')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        ServerActions.getTequila(response.body);
      });
  },
  getFabricantes: function(fabricante) {
    request.get('https://my-json-server.typicode.com/HidalgoIvan/TequilaReact/fabricantes')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        ServerActions.getFabricante(response.body);
      });
  }
};
