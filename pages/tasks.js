

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


function HomePage() {

	const { data, error } = useSWR('/api/tasks', fetcher)

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	return (
		<ul>
			{
				data.data.map((task) => {
					return (
						<li key={task._id}>
							<h2>{task.title}</h2>
							<p>{task.address}</p>
						</li>
					)
				})
			}
		</ul>
	);

};



export default HomePage;