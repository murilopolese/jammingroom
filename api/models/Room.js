/**
* Room.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var midi = require( 'midiutils' );

module.exports = {

	attributes: {
		chords: {
			type: 'array'
		},
		scale: {
			type: 'array'
		},
		generateScale: function() {
			var mainNote = midi.noteNameToNoteNumber( this.chords[ 0 ] + '-1' );
			mainNote = parseInt( mainNote );
			var scale = [];
			scale.push( mainNote );
			scale.push( mainNote + 2 );
			scale.push( mainNote + 4 );
			scale.push( mainNote + 7 );
			scale.push( mainNote + 9 );
			this.scale = scale;
		}
	}

};

