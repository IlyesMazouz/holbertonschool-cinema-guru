import React, { useState, useEffect } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';
import Authentication from './routes/auth/Authentication';
import axios from 'axios';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [title, setTitle] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const handleSearch = () => {
    console.log('Searching for:', title);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch((error) => {
        console.error('Error during authentication:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {userUsername}!</h2>
        </div>
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
      <SearchBar title={title} setTitle={setTitle} />
      <Input
        label="Your Name"
        type="text"
        className="custom-class"
        value={inputValue}
        setValue={setInputValue}
      />
      <SelectInput
        label="Choose Option"
        options={options}
        className="custom-class"
        value={selectValue}
        setValue={setSelectValue}
      />
      <Button
        label="Search"
        className="btn-primary"
        onClick={handleSearch}
      />
    </div>
  );
};

export default App;
