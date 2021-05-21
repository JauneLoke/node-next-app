import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
}));

export default function Topbar({ drawerButton = false }) {
	const classes = useStyles();

	return (
		<AppBar position="fixed">
			<Toolbar>
				{(!drawerButton) ? null :
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
				}

				<Typography variant="h6" className={classes.title}>
					Project Title
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
