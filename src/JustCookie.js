import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function Cookie() {
  useEffect(() => {
    fetch('http://docker.channelmix.com:5000/auth-urls?clientId=3973&redirectPath=/landing&sourceId=8', {
        credentials: 'include',  
        headers: {
        'Authorization': 'Bearer JWT_TOKEN',
      }
    }).then(() => {
      fetch('http://docker.channelmix.com:5000/clients?cmxapiConsumerIdentifier=10', {
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer JWT_TOKEN',
        }
      });
    });
  });
  return null;
}
export default Cookie;