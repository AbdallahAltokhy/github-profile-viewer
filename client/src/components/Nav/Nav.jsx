import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import useStyles from './nav-styles.js';

export default function SearchAppBar({ getUser }) {
	const classes = useStyles();

	const handleChange = (e) => {
		if (e.keyCode == 13) {
			console.log('value', e.target.value);
			getUser(e.target.value);
		}
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<Link to="/" className={classes.avatar}>
							<GitHubIcon />
						</Link>
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						Github Viewer
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							onKeyDown={handleChange}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
