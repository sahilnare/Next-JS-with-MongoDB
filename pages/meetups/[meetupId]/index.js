
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from "../../../components/meetups/MeetupDetail";
import { getSingleMeetup } from '../../../controllers/meetups';

function MeetupDetails({ meetup }) {

	return (
		<Fragment>
			<Head>
				<title>{meetup.title}</title>
			</Head>
			<MeetupDetail 
				image={meetup.image}
				title={meetup.title}
				address={meetup.address}
				description={meetup.description}
			/>
		</Fragment>
	);

};

export async function getServerSideProps(context) {

	const id = context.params.meetupId;

	let meetup = await getSingleMeetup(id);

	// # For Serialization error. Also you can use .lean() method on mongoose query. Another solution is to convert _id to string and then pass it to props
	// meetup = JSON.parse(JSON.stringify(meetup));

	// console.log(meetup);

	return {
		props: {
			meetup
		},
	}
}

export default MeetupDetails;