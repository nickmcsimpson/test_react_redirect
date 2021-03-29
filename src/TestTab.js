import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function TestTab() {
  useEffect(() => {
    fetch(`https://datorama.qa.channelmix.com:5500/auth-urls?clientId=3973&redirectPath=/landing&sourceId=8`, {
      headers: {
        'Authorization': 'Bearer JWT_TOKEN'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      window.location.assign('/return?credential_id=10269&client_id=3973&source_id=8&status=success');
    });
  });
  return null;
}

export default TestTab;