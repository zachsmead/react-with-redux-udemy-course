import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => { // this line is an es6 shortcut identical to saying:
	// const VideoListItem = (props) => {
		// const video = props.video;
		// const onVideoSelect = props.onVideoSelect
	console.log(video)
	const imageUrl = video.snippet.thumbnails.default.url;

	// ** clicking on this component triggers the function 'onVideoSelect' and passes the video as input.
	return (
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imageUrl} />
				</div>
			</div>

			<div className='media-body'>
				<div className='media-heading'>
					{video.snippet.title}
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;