import { useEffect } from 'react';
import './App.css';

function Tab() {
  useEffect(() => {
    //   Must include 'credentials' to get cookie set properly
    fetch('https://datorama.qa.channelmix.com:5500/auth-urls?clientId=3973&redirectPath=https://react-nick.herokuapp.com/landing&sourceId=8', {
        credentials: 'include',
        headers: {
        'Authorization': 'Bearer JWT_TOKEN'
      }
    })
    .then((res) => {
        return res.json()
    })
    .then((json) => {
      let url = json['data'][0]['attributes']['auth_url']
      
      window.location.href = url;
    });
  });
  return null;
}

export default Tab;