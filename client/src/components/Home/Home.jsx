import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home({ user }) {
	return Object.keys(user).length === 0 ? (
		<CircularProgress />
	) : (
		<Card className="card-container">
			<CardActionArea>
				<Avatar
					alt="Remy Sharp"
					src={user.data.avatar_url}
					className="card-avatar"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{user.data.className}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{user.data.bio}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to="/profile" className="details-btn">
					<Button size="small" color="primary">
						Learn More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
