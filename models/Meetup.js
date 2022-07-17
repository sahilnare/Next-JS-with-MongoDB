

// # MongoDB Schema

const mongoose = require('mongoose');

const MeetupSchema = new mongoose.Schema({
	// # Validators
	title: {
		type: String,
		required: [true, 'title must be provided'],
	},
	address: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
});



// # Exporting the Model
module.exports = mongoose.models.Meetup || mongoose.model('Meetup', MeetupSchema);

