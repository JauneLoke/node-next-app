import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
		color: theme.palette.primary.main,
		padding: theme.spacing(3),
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '100%',
		width: '100%',
	}
}));

const LoadingScreen = () => {
	const classes = useStyles();

	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, []);

	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	);
};

export default LoadingScreen;
