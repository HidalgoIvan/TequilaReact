// Requiring the Dispatcher, Constants, and
// event emitter dependencies
var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../AppConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define the store as an empty array
var _store = {
  listTequila: [],
  listFabricantes: [],
  listBotellas: [],
  editing: false
};

var _storeFabricantes = {
  list: [],
  editing: false
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
var TodoStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function() {
    return _store;
  },

  getTequilas: function() {
    return _store.listTequila;
  },
  getBotellas: function() {
    return _store.listBotellas;
  },
  getListFabricantes: function() {
    return _store.listFabricantes;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.actionType) {

    case AppConstants.GET_TEQUILA:
      console.log(action.response);
      // Construct the new todo string
      var newTodo = action.response;

      // Add the new todo to the list
      if(_store.listTequila.length<1){
        _store.listTequila.push(newTodo);
      }else{
        _store.listTequila.pop();
        _store.listTequila.push(newTodo);
      }
      TodoStore.emit(CHANGE_EVENT);
      break;
      case AppConstants.GET_FABRICANTE_RESPONSE:
        console.log(action.response);
        // Construct the new todo string
        var newTodo = action.response;

        // Add the new todo to the list
        if(_store.listFabricantes.length<1){
          _store.listFabricantes.push(newTodo);
        }else{
          _store.listFabricantes.pop();
          _store.listFabricantes.push(newTodo);
        }
        TodoStore.emit(CHANGE_EVENT);
        break;
        case AppConstants.POST_BOTELLA:
        console.log(action.response);
        // Construct the new todo string
        var newTodo = action.response;

        // Add the new todo to the list
        if(_store.listBotellas.length<1){
          _store.listBotellas.push(newTodo);
        }else{
          _store.listBotellas.pop();
          _store.listBotellas.push(newTodo);
        }
        TodoStore.emit(CHANGE_EVENT);
          break;

    default:
      return true;
  }
});

module.exports = TodoStore;
