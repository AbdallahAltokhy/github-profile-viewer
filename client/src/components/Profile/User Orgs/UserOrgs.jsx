import React, { useState, useEffect } from 'react';
import getUserOrgs from '../../../services/organizationsService';
import './userOrgs.css';

const UserOrgs = ({ user }) => {
	const [orgs, setorgs] = useState([]);

	useEffect(() => {
		const userName = user.data.login;
		getUserOrgs(userName).then((data) => setorgs(data.data));
	}, []);

	console.log(orgs);
	return orgs.length === 0 ? (
		<h1>This user has no organizations</h1>
	) : (
		<div className="user-orgs">
			{orgs.map((org) => {
				return (
					<div className="org" key={org.url}>
						<h2 className="org-name">Organization: {org.login}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default UserOrgs;
