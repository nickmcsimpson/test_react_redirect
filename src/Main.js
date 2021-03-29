import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './Tab';

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
    // window.open('/test_tab')
    this.setState({auth_clicked: true, returned: false, auth_return_params: ''});
    window.open('/tab');
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