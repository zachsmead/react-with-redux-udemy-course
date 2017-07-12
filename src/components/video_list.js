import React from 'react';
import VideoListItem from './video_list_item';

// NOTE: in a class-based component (see index.js) props is accessible from anywhere
// in the component by calling this.props.

// However, in a functional component (const Foo, like below), the props object is an argument.

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {					// set videoItems to the array given by mapping props.videos
		return <VideoListItem key={video.etag} video={video} /> // and calling VideoListItem on each item
	})																												// video={video} passes props.video to that component

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;