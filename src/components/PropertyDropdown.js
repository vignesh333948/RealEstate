import React, { useState, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative w-full">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white p-2 border border-gray-300 rounded-md w-full"
      >
        <div className="flex items-center space-x-2">
          <RiHome5Line className="text-gray-500" />
          <div>
            <div className="text-[15px] font-medium">{property || "Select Property"}</div>
            <div className="text-[13px] text-gray-500">Select Your Place</div>
          </div>
        </div>
        {isOpen ? 
          (<RiArrowDownSLine className='dropdown-icon-secondry'/>) : 
          (<RiArrowUpSLine className='dropdown-icon-secondry' />)}      
          </Menu.Button>

      <Menu.Items className="absolute mt-2 w-full bg-white border border-gray-200 shadow-md rounded-md z-10">
        {properties && properties.length > 0 ? (
          properties.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <div
                  onClick={() => {
                    setProperty(item);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 ${active ? "bg-violet-100" : ""}`}
                >
                  {item}
                </div>
              )}
            </Menu.Item>
          ))
        ) : (
          <li className="p-2 text-gray-500 text-center">No Properties Available</li>
        )}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
