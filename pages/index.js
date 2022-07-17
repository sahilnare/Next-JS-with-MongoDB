
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from "../components/meetups/MeetupList";
import { getAllMeetups } from '../controllers/meetups';


function HomePage(props) {

	return (
		<Fragment>
			<Head>
				<title>Meetups with Nextjs</title>
				<meta name='description' content='Wanna meet people? This the place for you!' />
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	)

};

export async function getServerSideProps(context) {

	const allMeetups = await getAllMeetups();

	return {
		props: {
			meetups: allMeetups.map(meet => {
				return {
					id: meet._id.toString(),
					title: meet.title,
					address: meet.address,
					image: meet.image
				};
			})
		},
	}
}
  

// export async function getStaticProps() {

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	}

// };

export default HomePage;