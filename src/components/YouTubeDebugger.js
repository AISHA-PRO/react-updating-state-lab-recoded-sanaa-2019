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
    handleClickBitrate = ()=>{
      this.setState({
        settings: {
          ...this.state.settings ,bitrate: 12 
        }
      })
    }
    handleClickResolution = ()=>{
      this.setState({
        settings: {
          ...this.state.settings ,bitrate: 12 
        }
      })
    }
 
    render(){
        return(
            <button className="bitrate" onClick={this.handleClickBitrate}> change bitrate to 12</button>
             <button className="resolution" onClick={this.handleClickResolution}> change resolution to 720p</button>
        );
    }
}