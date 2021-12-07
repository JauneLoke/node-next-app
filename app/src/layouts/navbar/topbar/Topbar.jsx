import { AppBar, Toolbar, IconButton, makeStyles, Button, Grow, Popper, Paper, MenuList, ClickAwayListener, MenuItem } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import Link from 'next/link';
import { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
}));

export default function Topbar({ drawerButton = false }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	return (
		<AppBar position="fixed">
			<Toolbar>
				{(!drawerButton) ? null :
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
				}

				<Link href="/">
					<a>
						<Button>
							Accueil
						</Button>
					</a>
				</Link>

				<Button ref={anchorRef} aria-controls={open ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={handleToggle}>
					Request
				</Button>
				<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal >
					{({ TransitionProps, placement }) => (
						<Grow {...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom"
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
										<MenuItem onClick={handleClose}>
											<Link href="/request/fetch">
												Fetch
											</Link>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<Link href="/request/static">
												static
											</Link>
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</Toolbar>
		</AppBar>
	);
}
