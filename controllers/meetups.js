
import dbConnect from '../lib/dbConnect';
import Meetup from '../models/Meetup';

export const createMeetup = async (body) => {

	try {

		await dbConnect();

		const newMeetup = Meetup.create(body);

		return newMeetup;

	} catch (error) {
		console.log(error);
	}

}

export const getAllMeetups = async () => {

	try {

		await dbConnect();

		const allMeetups = Meetup.find({});

		return allMeetups;

	} catch (error) {
		console.log(error);
	}

}

export const getSingleMeetup = async (id) => {

	try {
		
		await dbConnect();

		const meetup = Meetup.findOne({ _id: id }, { _id: 0 }).lean(true);

		return meetup;

	} catch (error) {
		console.log(error);
	}

}

