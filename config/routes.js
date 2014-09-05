
module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  '/play': {
  	view: 'play'
  },
  'GET /chordWork/:id': 'InstrumentsController.chordWork',
  'GET /simplest/:id': 'InstrumentsController.simplest',
  'GET /reich/:id': 'InstrumentsController.reich',
  'GET /chords/:id': 'InstrumentsController.chordsPlayer'

};
