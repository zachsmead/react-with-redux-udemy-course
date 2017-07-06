import React from 'react'; // we didn't write this so don't have to make a path reference- it's a library
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; // we wrote this so we have to make a path reference to import

const API_KEY = 'AIzaSyC21wbRLnZWiouqP10wgS8x6etgKzYJuXc';


// Create a new component, this component should produce some html.


const App = () => {
	return (
		<div>
			Hi!
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page (in the DOM)
// App 'App' is a class, '<App />' is an instance of that class
ReactDOM.render(<App />, document.querySelector('.container'));	// find the class 'container'
																															 	//	and render the App
																															 	// instance inside of it.