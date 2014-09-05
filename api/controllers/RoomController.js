/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var midi = require( 'midiutils' );

module.exports = {
	getWithScale: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			var mainNote = midi.noteNameToNoteNumber( room.chords[0] + '-4' );
			var scale = generateScale( mainNote );
			room.scale = scale;
			res.json( room );
		});
	},
	lobby: function( req, res ) {
		Room.findOne( req.params.id )
		.then( function( room ) {
			res.view( 'room', room );
		});
	}
};

var generateScale = function( mainNote, scaleName ) {
	mainNote = parseInt( mainNote );
	scaleName = scaleName || 'penta';
	var scale = [];
	if( scaleName == 'penta' ) {
		scale.push( mainNote );
		scale.push( mainNote + 2 );
		scale.push( mainNote + 4 );
		scale.push( mainNote + 7 );
		scale.push( mainNote + 9 );
		return scale;
	}
}