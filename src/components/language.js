import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

function Language() {

    const countryOptions = [
        { key: 'af', value: 'af', flag: 'af', text: 'English' },
        { key: 'ax', value: 'ax', flag: 'ax', text: 'Spanish' },
        { key: 'al', value: 'al', flag: 'al', text: 'Chinese' },
        { key: 'dz', value: 'dz', flag: 'dz', text: 'Korean' },
        { key: 'as', value: 'as', flag: 'as', text: 'French' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Hindi' },
        { key: 'ad', value: 'ad', flag: 'ad', text: 'Arabic' },
      ]
      
      const DropdownExampleSearchSelection = () => (
        <Dropdown
          placeholder='Select Language'
          fluid
          search
          selection
          options={countryOptions}
        />
      )

  return (
    <div>
      <h3>
        Choose a Language
      </h3>
      <Dropdown
          placeholder='Select Language'
          fluid
          search
          selection
          options={countryOptions}
        />
      <Link to = "/url" className = "button"> Continue </Link>

    </div>
  );
}

export default Language;
