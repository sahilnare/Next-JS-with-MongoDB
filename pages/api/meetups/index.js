

import { createMeetup, getAllMeetups } from '../../../controllers/meetups';


export default async function handler(req, res) {

	const { method } = req;

	switch(method) {

		case 'POST':
			try {

				const meetup = await createMeetup(req.body);
				res.status(201).json({success: true, data: meetup});
				
			} catch (error) {

				console.log(error);
				throw error;
				
			}
			break;
		case 'GET':
			try {

				const allMeetups = await getAllMeetups();
				res.status(201).json({success: true, data: allMeetups});
				
			} catch (error) {

				console.log(error);
				throw error;
				
			}
			break;
		default:
			break;

	};

	
};


