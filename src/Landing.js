import { Component } from 'react';
import './App.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    const channel = new BroadcastChannel('test_channel');

    channel.postMessage(this.props.location.search);
  }

  render() {
    return (
            <div> 
                <h2>Welcome back!</h2>
                <button onClick={window.close}>Close</button>
            </div>
        )
  }
}

export default Landing;