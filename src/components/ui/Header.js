import React, { useState, useEffect} from 'react';
import logo from '../../logo.png';
import axios from 'axios';

const Header = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`);
      console.log(result.data)
    }
    fetchItems();
  }, [])

  return (
    <div className='center'>
      <img src={logo} alt="logo"/>
    </div>
  )
}

export default Header
