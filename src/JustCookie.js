import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function Cookie() {
  useEffect(() => {
    fetch('https://datorama.qa.channelmix.com:5500/auth-urls?clientId=3973&redirectPath=/landing&sourceId=8', {
      headers: {
        'Authorization': 'Bearer JWT_TOKEN'
      }
    }).then(() => {
      fetch('https://datorama.qa.channelmix.com:5500//backend/api/swagger/openapi.json', {
        credentials: 'include'
      });
    });
  });
  return null;
}
export default Cookie;