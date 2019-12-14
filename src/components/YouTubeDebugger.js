// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super();
        this.state = {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video: {
              resolution: '1080p'
            }
          }
        }
    }
    
 
    render(){
        return(
            <button className="bitrate" onClick={this.handleClickBitrate}> bitrate</button>
             <button className="bitrate" onClick={this.handleClickBitrate}> bitrate</button>
        );
    }
}