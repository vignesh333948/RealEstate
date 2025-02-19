import React, { useState, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { HouseContext } from './HouseContext';  
import { Menu } from '@headlessui/react';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  
  // ✅ Move useState to the top level, before any conditions
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Ensure `countries` is always an array
  if (!countries || !Array.isArray(countries)) return null;

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-secondry' />
        <div>
          <div className='text-[15px] font-medium leading-right'>{country}</div>
          <div className='text-[13px]'>Select Your Place</div>
        </div>
        {isOpen ? 
          (<RiArrowDownSLine className='dropdown-icon-secondry'/>) : 
          (<RiArrowUpSLine className='dropdown-icon-secondry' />)}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => (
          <Menu.Item as="li" key={index} onClick={() => setCountry(country)} className='cursor-pointer hover:text-violet-700 transition'>
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
