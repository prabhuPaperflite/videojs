import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
require('@silvermine/videojs-quality-selector')(videojs);
require('@silvermine/videojs-quality-selector/dist/css/quality-selector.css')

class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate video.js player
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('Player is ready');
    });
    this.player.controlBar.addChild('QualitySelector')
  }

  componentWillUnmount() {
    // destroy video.js player
    if (this.player) {
      this.player.dispose();
    }
    
  }

  render() {
    return (
      <div>
        <video 
          style={{width:"500px",height:"500px"}}
          ref={(node) => (this.videoNode = node)}
          className="video-js vjs-default-skin"
        >
               <source src="https://dwoemqguc7qqj.cloudfront.net/public/5_content.mp4" type="video/mp4" label="480P"></source>
               <source src="https://dwoemqguc7qqj.cloudfront.net/public/23_content.mp4" type="video/mp4" label="720P"></source>
               <source src="https://dwoemqguc7qqj.cloudfront.net/public/21_content.mp4" type="video/mp4" label="1020P"></source>
        
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
