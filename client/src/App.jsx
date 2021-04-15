import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import getUser from './services/userService';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

const App = () => {
	const [user, setUser] = useState({});

	const getUserData = (userName) => {
		getUser(userName)
			.then((data) => setUser(data))
			.catch((err) => alert('please enter a valid username'));
	};

	return (
		<>
			<Router>
				<Nav getUser={getUserData} />
				<Switch>
					<Route exact path="/">
						<Home user={user} />
					</Route>
					<Route exact path="/profile">
						<Profile user={user} />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
