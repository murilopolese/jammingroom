
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  '/play': {
  	view: 'play'
  },
  'GET /room/:id': 'RoomController.getWithScale'

};
