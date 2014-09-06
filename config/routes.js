
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  '/play': {
  	view: 'play'
  },
  'GET /veryBeginner/:id': 'InstrumentsController.veryBeginner',
  'GET /player/:id': 'InstrumentsController.player',
  'GET /simplest/:id': 'InstrumentsController.simplest',
  'GET /reich/:id': 'InstrumentsController.reich'

};
