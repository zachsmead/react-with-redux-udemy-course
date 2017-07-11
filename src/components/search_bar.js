import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: 'Starting value' };
	}

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }

	// is the same as:


	render() {
		return (
			<div>
				<input
					value = {this.state.term}
					onChange = { event => this.setState({ term: event.target.value }) }
				/>
				Value of the input: { this.state.term }
			</div>
		);
	}
}

export default SearchBar; // this is what we are sending to index.js in the import statement