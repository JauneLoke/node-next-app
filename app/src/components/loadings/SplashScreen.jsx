import React from 'react';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
		alignItems: 'center',
		position: 'fixed',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
		zIndex: 11,
	}
}));

const SlashScreen = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box width={400}>
				<LinearProgress />
			</Box>
		</div>
	);
};

export default SlashScreen;
