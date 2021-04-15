import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import './userCard.css';

const UserCard = ({ user }) => {
	return Object.keys(user).length === 0 ? (
		<CircularProgress />
	) : (
		<div className="user-card">
			<div className="user-profile">
				<Avatar
					alt="Remy Sharp"
					src={user.data.avatar_url}
					className="user-avatar"
				/>
				<h1 className="user-name">{user.data.name}</h1>
			</div>

			<div className="user-data">
				<h2 className="user-bio">Bio</h2>
				<p className="user-bio">{user.data.bio}</p>

				<div className="figures">
					<div className="user-figures">Followers: {user.data.followers}</div>
					<div className="user-figures">Following: {user.data.following}</div>
					<div className="user-figures">Repos: {user.data.public_repos}</div>
					<div className="user-figures">Gists: {user.data.public_gists}</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
