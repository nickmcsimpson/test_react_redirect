import { useEffect } from 'react';
import './App.css';

function Cookie() {
  useEffect(() => {
    fetch('https://datorama.qa.channelmix.com:5500/auth-urls?clientId=3973&redirectPath=/landing&sourceId=8', {
        credentials: 'include',  
        headers: {
        'Authorization': 'Bearer JWT_TOKEN',
      }
    }).then(() => {
      fetch('https://datorama.qa.channelmix.com:5500/clients?cmxapiConsumerIdentifier=10', {
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