import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const SideList = ({ handleRender }) => {
	return (
		<div>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="User Profile" />
			</ListItem>
			<ListItem button onClick={() => handleRender('repos')}>
				<ListItemIcon>
					<FormatListBulletedIcon />
				</ListItemIcon>
				<ListItemText primary="Repos" />
			</ListItem>
			<ListItem button onClick={() => handleRender('gists')}>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="Gists" />
			</ListItem>
			<ListItem button onClick={() => handleRender('orgs')}>
				<ListItemIcon>
					<PeopleIcon />
				</ListItemIcon>
				<ListItemText primary="Organizations" />
			</ListItem>
		</div>
	);
};

export default SideList;
