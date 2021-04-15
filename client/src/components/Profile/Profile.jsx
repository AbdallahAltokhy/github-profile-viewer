import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import useStyles from './profileStyle';
import SideList from './Side List/SideList.jsx';
import UserGists from './User gists/UserGists';
import UserRepos from './User Repos/UserRepos';
import UserOrgs from './User Orgs/UserOrgs';
import UserCard from './UserCard/UserCard';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/AbdallahAltokhy">
				Abdallah Altokhy
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function Dashboard({ user }) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [renderedComponent, setRenderedComponent] = React.useState('test');

	//handle open & close side bar
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	//handle rendered component
	const handleRender = (component) => {
		setRenderedComponent(component);
	};
	const renderSwitch = () => {
		switch (renderedComponent) {
			case 'repos':
				return <UserRepos user={user} />;
			case 'gists':
				return <UserGists user={user} />;
			default:
				return <UserOrgs user={user} />;
		}
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden,
						)}
					>
						<MenuIcon />
					</IconButton>
					{/* /TODO: add user profile picture here  		 */}
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<SideList handleRender={handleRender} />
				</List>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<UserCard user={user} />
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>{renderSwitch()}</Paper>
						</Grid>
					</Grid>
					<Box pt={4}>
						<Copyright />
					</Box>
				</Container>
			</main>
		</div>
	);
}
