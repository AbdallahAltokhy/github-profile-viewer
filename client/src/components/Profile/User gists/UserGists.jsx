import React, { useState, useEffect } from 'react';
import getUserGists from '../../../services/gistsService';
import './userGists.css';

const UserGists = ({ user }) => {
	const [gists, setGists] = useState([]);

	useEffect(() => {
		const userName = user.data.login;
		getUserGists(userName).then((data) => setGists(data.data));
	}, []);

	console.log(gists);
	return gists.length === 0 ? (
		<h1 className="no-gists">This user has no Gists</h1>
	) : (
		<div className="user-gists">
			{gists.map((gist) => {
				return (
					<div className="gist" key={gist.url}>
						<h2 className="gist-name">Gist url 👉</h2>
						<a
							className="gist-url"
							href={gist.git_pull_url}
							target="_blank"
							rel="noreferrer"
						>
							Check The Gist
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default UserGists;
