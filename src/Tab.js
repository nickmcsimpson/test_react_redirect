import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Tab() {
  useEffect(() => {
    fetch('https://datorama.qa.channelmix.com:5500/auth-urls?clientId=3973&redirectPath=http://localhost:3000/landingtab&sourceId=8', {
      headers: {
        'Authorization': 'Bearer JWT_TOKEN'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      let url = json['data'][0]['attributes']['auth_url']
      window.location.assign(url, {
        credentials: 'include'
      });
    });
  });
  return null;
}

export default Tab;