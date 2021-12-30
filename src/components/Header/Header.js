import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { getRandomInt } from '../../helper';
import Button from '../Button/Button';

import './Header.css';

const Header = () => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  };

  const clickHandler = async () => {
    if (isCopied) return;
    try {
      await copyTextToClipboard(url);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      const ID = getRandomInt(1, 50);
      try {
        const response = await fetch(
          `https://61cd9eb57067f600179c5b50.mockapi.io/ap1/v1/url/${ID}`
        );
        const data = await response.json();
        setUrl(data.url);
      } catch (err) {
        console.log(err);
        setError('Could not get the url');
      }
    };
    fetchData();
  }, []);

  return (
    <header className='header'>
      <img src={logo} alt=';ogo' />
      <div className='copy-container'>
        <p>{url || error}</p>
        <Button
          style={{ fontSize: '14px' }}
          disabled={isCopied}
          onClick={clickHandler}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <Button className='mobile-only' style={{ fontSize: '14px' }}>
        Share
      </Button>
    </header>
  );
};

export default Header;
