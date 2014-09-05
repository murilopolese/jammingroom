/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	lobby: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			res.view( 'room', room );
		});
	}
};

