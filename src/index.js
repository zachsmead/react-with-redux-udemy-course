import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component, this component should produce some html.

const App = function() {
	return <div>Hi! </div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// App; // 'App' is a class, '<App />' is an instance of that class.
ReactDOM.render(<App />, document.querySelector('.container')); // find the class 'container'
																															 //	and render the App
																															 // instance inside of it.