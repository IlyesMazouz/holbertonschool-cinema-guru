import React, { useState } from 'react';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

const App = () => {
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

  return (
    <div className="App">
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
