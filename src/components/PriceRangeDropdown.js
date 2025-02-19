import React, { useState, useContext } from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices =[
      {
        value:'Price RAnge (any)',
      },
      {
        value:'100000 - 130000'
      },
      {
        value:'130000 - 160000'
      }, {
        value:'160000 - 190000'
      }, {
        value:'190000 - 220000'
      }, {
        value:'30000 - 40000'
      },
  ]
  return (
    <Menu as="div" className="relative w-full">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white p-2 border border-gray-300 rounded-md w-full"
      >
        <div className="flex items-center space-x-2">
          <RiWallet3Line className="text-gray-500" />
          <div>
            <div className="text-[15px] font-medium">{price || "Select Property"}</div>
            <div className="text-[13px] text-gray-500">Choose Price Range</div>
          </div>
        </div>
        {isOpen ? 
          (<RiArrowDownSLine className='dropdown-icon-secondry'/>) : 
          (<RiArrowUpSLine className='dropdown-icon-secondry' />)}      
          </Menu.Button>

      <Menu.Items className="absolute mt-2 w-full bg-white border border-gray-200 shadow-md rounded-md z-10">
        {prices && prices.length > 0 ? (
          prices.map((price, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <div
                  onClick={() => {
                    setPrice(price.value);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 ${active ? "bg-violet-100" : ""}`}
                >
                  {price.value}
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

export default PriceRangeDropdown;
