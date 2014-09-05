
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  '/play': {
  	view: 'play'
  },
  'GET /simplest/:id': 'InstrumentsController.simplest',
  'GET /chords/:id': 'InstrumentsController.chordsPlayer'

};
