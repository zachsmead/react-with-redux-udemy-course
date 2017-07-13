import React, { Component } from 'react'; // we didn't write this so don't have to make a path reference- it's a library
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // we wrote this so we have to make a path reference to import
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC21wbRLnZWiouqP10wgS8x6etgKzYJuXc';


// Create a new component, this component should produce some html.


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// this.setState({ videos: videos }); is the same as
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}


	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // onVideoSelect calls a function that
																																					// passes the selected video as input
																																					// and then sets the state to that video
																																					// the function onVideoSelect is passed
																																					// as a parameter of props, to the
																																					// VideoList component.
					videos={this.state.videos}
				/>
			</div>
				// this is called passing a prop
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
// App 'App' is a class, '<App />' is an instance of that class
ReactDOM.render(<App />, document.querySelector('.container'));	// find the class 'container'
																															 	//	and render the App
																															 	// instance inside of it.