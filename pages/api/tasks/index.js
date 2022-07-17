
import { createRouter } from "next-connect";
import { getAllMeetups } from '../../../controllers/meetups';
import dateHandler from '../../../middleware/date';

const router = createRouter();


router
  .use(dateHandler)
  .get(async (req, res) => {
    try {

		const allMeetups = await getAllMeetups();
		res.status(201).json({success: true, data: allMeetups});
		
	} catch (error) {

		console.log(error);
		throw error;
		
	}
  });


export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});