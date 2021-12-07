import { Typography, Box, Button } from '@material-ui/core';
import { useState } from 'react';

export default function Home() {
	const [state, setState] = useState({})

	const handleClick = () => {
		const data = fetch('/api', { method: 'POST' })
			.then(r => r.json())
			.then(setState)
	}

	return (
		<>
			<Box p={2}>
				<Button variant="contained" color="primary" onClick={handleClick}>
					Incrémente
				</Button>
			</Box>

			<Box p={2}>
				{
					(state.name && state.value)
						? <Typography variant="body1" color="initial">{state.name} {state.value}</Typography>
						: null
				}
			</Box>
		</>
	)
}