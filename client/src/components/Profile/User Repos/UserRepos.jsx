import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './userRepo.css';
import getUserRepos from '../../../services/reposService';

const UserRepos = ({ user }) => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const userName = user.data.login;
		getUserRepos(userName).then((data) => setRepos(data.data));
	}, []);

	console.log(repos);
	return repos.length === 0 ? (
		<CircularProgress />
	) : (
		<div className="user-repos">
			{repos.map((repo) => {
				return (
					<div className="repo" key={repo.name}>
						<h2 className="repo-name">{repo.name}</h2>
						<a
							className="repo-url"
							href={repo.clone_url}
							target="_blank"
							rel="noreferrer"
						>
							Check The Repo
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default UserRepos;
