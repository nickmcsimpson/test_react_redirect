import { Component } from 'react';
import './App.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    const channel = new BroadcastChannel('test_channel');

    //Sends the path parameters to the channel for our original tab to open
    channel.postMessage(this.props.location.search); 
  }

  render() {
    return (
            <div> 
                <h2>Welcome back!</h2>
                <p>Go checkout out the message I left for you on the main tab!</p>
            </div>
        )
  }
}

export default Landing;