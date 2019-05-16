
var ServerActions = require('./Actions/ServerActions');
var request = require('superagent');
var request2 = require('request');

module.exports = {

  get: function() {
    var queryValues = '{ botellas { clasificacion fotografia marca numeroDeEtiqueta submarca } }';
    var json = { query : queryValues };
    request2.post({ headers: {'content-type' : 'application/json'}
               , url: "http://192.168.99.100:4000/graphql", body: JSON.stringify(json)
               }, function(error, response, body){
    ServerActions.getTequila(response.body);
    });
  },
  getFabricantes: function(fabricante) {
    console.log("estoy en get fabricantes");
    request.get('https://my-json-server.typicode.com/HidalgoIvan/TequilaReact/fabricantes')
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);

        ServerActions.getFabricante(response.body);
      });
  },
  registrarBotella: function(botella){
  }
};
