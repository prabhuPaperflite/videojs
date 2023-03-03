import React from 'react';
import VideoPlayer from './VideoPlayer';
import Bowser from "bowser";

class VideoViewer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log(Bowser.parse(window.navigator.userAgent));
  }
 

  render() {
 
    return (
      <div>
         <VideoPlayer
          controls
          autoplay
          preload="auto"
        />
      </div>
    );
  }


}

export default VideoViewer;