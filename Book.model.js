'use strict';

var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema(
	{
		 title: String,
		author: Array,
		category: String
	});


module.exports = mongoose.model('Book',BookSchema);
