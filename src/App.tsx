import React from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import Todo from './components/Todo';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';

function App() {
	const [date, setDate] = useState<Date>(new Date());

	return (
		<div className="App">
			<Header></Header>
			<div className='content'>
				<Calendar date={date} setDate={setDate}></Calendar>
				{date !== undefined &&
					<Todo date={date}></Todo>}
			</div>
		</div>
	);
}

export default App;
