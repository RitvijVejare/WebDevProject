import React from 'react';
import Sidebar from "./sidebar"
import { Grid, Typography, Container, TextField, List } from '@material-ui/core';

function App() {
	return (
		<div className="App">
			<Grid container>
				<Grid item xs={3} style={{backgroundColor:"#1E2C26E6"}}>
					<Sidebar />
				</Grid>
				<Grid item xs={9}>

				</Grid>
			</Grid>
		</div>
	);
}

export default App;
