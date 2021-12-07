import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
	'@global': {
		'*': {
			fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
			boxSizing: 'border-box',
		},
		html: {
			height: '100%',
			width: '100%',
			margin: 0,
			padding: 0,
		},
		body: {
			height: '100%',
			width: '100%',
			margin: 0,
			padding: 0,
		},
		a: {
			textDecoration: 'none',
			color: 'inherit',
		}
	},
}));

const GlobalStyles = () => {
	useStyles();

	return null;
};

export default GlobalStyles;