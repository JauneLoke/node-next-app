import { red, indigo } from '@material-ui/core/colors';

const overrides = {
	MuiButton: {
		root: {
			height: 30,
		},
	},
	MuiIconButton: {
		root: {
			'&:hover': {
				backgroundColor: 'rgba(0, 0, 0, 0.54)'
			}
		}
	},
};

const typography = {
	body1: {
		fontSize: '1rem',
		fontWeight: 400,
		lineHeight: 1.75,
	},
	h1: {
		fontSize: '2.1rem',
		fontWeight: 600,
		letterSpacing: '-0.24px'
	},
	h2: {
		fontSize: '1.7rem',
		fontWeight: 500,
		letterSpacing: '-0.24px'
	},
	h3: {
		fontSize: '1.6rem',
		fontWeight: 500,
		letterSpacing: '-0.06px'
	},
	h4: {
		fontSize: '1.5rem',
		fontWeight: 500,
		letterSpacing: '-0.06px'
	},
	h5: {
		fontSize: '1.4rem',
		fontWeight: 500,
		letterSpacing: '-0.05px'
	},
	h6: {
		fontSize: '1.3rem',
		fontWeight: 500,
		letterSpacing: '-0.05px'
	},
};

const dark = {
	palette: {
		type: 'dark',
		primary: {
			main: indigo[500],
		},
		secondary: {
			main: red[800],
		}
	},
	overrides,
	typography
};

const light = {
	palette: {
		type: 'light',
		primary: {
			main: indigo[500],
		},
		secondary: {
			main: red[800],
		},
	},
	overrides,
	typography
};

export { dark, light };
