import { Component } from 'react';
import './App.css';

class Main extends Component {
  constructor(props) {
    super(props);
    let broadcast = new BroadcastChannel('test_channel');
    broadcast.onmessage  = ({ data }) => { 
        this.GetData(data);
    }
    this.state = {auth_clicked: false};

    this.Opentab = this.Opentab.bind(this);
    this.GetData = this.GetData.bind(this);
  }

  Opentab() {
    this.setState({auth_clicked: true, returned: false, auth_return_params: ''});
    let domain = window.location.hostname
    if(domain.includes('heroku')) {
        window.open('/tab');
    } else {
        window.open('/test_tab')
    }
  }

  GetData(data) {
      this.setState({returned: true, auth_return_params: data});
      console.log(data);
  }

  render() {
    return (
        <div> I am the Main component
            <button onClick={this.Opentab} disabled={this.state.auth_clicked}>Authorize</button>
            <p hidden={!this.state.returned}>You made it! I found this:<br />
            {this.state.auth_return_params}
            </p>
        </div>
    )
  }
}

export default Main;