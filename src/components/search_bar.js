import React, { Component } from 'react';

class SearchBar extends Component {

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }

	// is the same as:


	render() {
		return <input onChange = {event => console.log(event.target.value) } />;
	}
}

export default SearchBar; // this is what we are sending to index.js in the import statement