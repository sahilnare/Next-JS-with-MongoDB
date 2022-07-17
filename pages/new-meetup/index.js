
import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

	const router = useRouter();

	const addMeetupHandler = async (enteredMeetupData) => {

		try {

			const res = await fetch(`/api/meetups`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(enteredMeetupData),
			});

			const data = await res.json();
	
			console.log(data);

			router.push('/');
			
		} catch (error) {
			console.log(error);
		}

		

	}

	return (
		<Fragment>
			<Head>
				<title>Create new meetup</title>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</Fragment>
	);

};

export default NewMeetupPage;