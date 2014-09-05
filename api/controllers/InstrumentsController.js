/**
 * InstrumentsController
 *
 * @description :: Server-side logic for managing instruments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	chordWork: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			res.view( 'chordWork', room );
		})
	},
	simplest: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			room.generateScale();
			res.view( 'simplest', room );
		})
	},
	reich: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			room.generateScale();
			res.view( 'reich', room );
		})
	},
	chordsPlayer: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			res.view( 'chordsPlayer', room );
		})	
	}
};

