import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import getUser from './services/userService';
import Home from './components/Home/Home';
// import Profile from './components/Dashboard';
import Dashboard from './components/Profile/Dashboard';

const App = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		getUser('AbdallahAltokhy').then((data) => setUser(data));
	}, []);

	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home user={user} />
					</Route>
					<Route exact path="/profile">
						<Dashboard user={user} />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
