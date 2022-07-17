
import { getSingleMeetup } from '../../../controllers/meetups';


export default async function handler(req, res) {

	const { method } = req;
	console.log(req.body)

	switch(method) {

		case 'GET':
			try {

				const id = req.params.meetupId;
				const meetup = await getSingleMeetup(id);
				res.status(201).json({success: true, data: meetup});
				
			} catch (error) {

				console.log(error);
				throw error;
				
			}
			break;
		default:
			break;

	};

	
};


