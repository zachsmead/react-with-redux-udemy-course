import React from 'react';
import VideoListItem from './video_list_item';

// NOTE: in a functional component (denoted by 'const'), props is an argument.
// in a class-based component (see index.js) props is accessible from anywhere
// in the component by calling this.props.
// so whenever we refactor a functional component to a class-based component,
// we have to remember to redefine props as this.props.

// However, in a functional component (const Foo, like below), the props object is an argument.

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			// ** Component VideoList contains VideoListItem, which has an onClick property that triggers 'onVideoSelect'.
			<VideoListItem
				onVideoSelect = {props.onVideoSelect} // ** in index.js, we gave VideoList access to index's props and
																							// ** passed onVideoSelect as a parameter of props.
																							// ** Now we are giving VideoListItem access to VideoList's props
																							// ** and passing onVideoSelect once more, as props.onVideoSelect.
				key={video.etag}
				video={video}
			/>
		);
	})

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}
// set videoItems to the array given by mapping props.videos
// and calling VideoListItem on each item
// video={video} passes props.video to that component
// this is like a ruby .each loop

export default VideoList;