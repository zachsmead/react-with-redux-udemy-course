import React from 'react';

// NOTE: in a class-based component (see index.js) props is accessible from anywhere
// in the component by calling this.props.

// However, in a functional component (const Foo, like below), the props object is an argument.

const VideoList = (props) => {
	return (
		<ul className="col-md-4 list-group">
			{props.videos.length}
		</ul>
	);
}

export default VideoList;