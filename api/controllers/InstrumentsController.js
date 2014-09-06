/**
 * InstrumentsController
 *
 * @description :: Server-side logic for managing instruments
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	veryBeginner: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			room.generateScale();
			res.view( 'veryBeginner', room );
		})
	},
	player: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			room.generateScale();
			res.view( 'player', room );
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
	}
};

