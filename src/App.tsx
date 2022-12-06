import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Todo from './components/Todo';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div className='content'>
				<Calendar></Calendar>
				<Todo></Todo>
			</div>
		</div>
	);
}

export default App;
