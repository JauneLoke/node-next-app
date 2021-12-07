import { Typography, Box } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function Fetch() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const request = fetch('/api/post')
			.then(res => res.json())
			.then(setPosts)
			.catch()
	}, [])

	useEffect(() => {
		console.dir(posts)
	}, [posts])

	if (posts && posts.length > 0) {
		return (
			<>
				<Box p={2}>
					{
						posts.map(post =>
							<Typography variant="body1" color="initial">{post.id} - {post.title}</Typography>
						)
					}
				</Box>
			</>
		)
	} else {
		return <></>
	}
}