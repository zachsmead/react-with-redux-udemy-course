import _ from 'lodash';
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

		this.videoSearch('surfboards'); // when the App component renders, it will automatically conduct a YT search

	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
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
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // ** calling onVideoSelect runs a function
																																					// that takes the video that was clicked as its
																																					// input, and sets the state's selectedVideo in  
																																					// index.js as that video. the function 
																																					// onVideoSelect is passed as a parameter of  
																																					// props, denoted by {}, to the VideoList 
																																					// component.

					videos={this.state.videos} // the component VideoList needs access to the list of videos in App's state,
																		 // and to make the videos available we pass VideoList an object 'videos' which
																		 // is equal to the contents of 'this.state.videos'. this is called 'passing
																		 // props' in React. We are passing data to the child components from the most
																		 // parent component, i.e. App in index.js.
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