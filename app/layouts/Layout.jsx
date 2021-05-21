import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Navbar from './navbar/Navbar';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		paddingTop: 64,
	},
	container: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
	},
	content: {
		flex: '1 1 auto',
		overflow: 'auto',
		height: '100%',
	}
}));

export default function MainLayout({ children }) {
	const classes = useStyles();

	return (
		<Box id="mainLayout" className={classes.root}>
			<Navbar />
			<Box id="mainWrapper" className={classes.wrapper}>
				<Box id="mainContainer" className={classes.container}>
					<Box id="mainContent" className={classes.content}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

MainLayout.propTypes = {
	children: PropTypes.node
};
