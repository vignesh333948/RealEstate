import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed,BiBath,BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const PropertyDetails = () => {
  const {id}=useParams();
  const house=housesData.find((house) =>{
    return house.id===parseInt(id);
  });
  console.log(house);
  return (
  <section>
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center gap-x-10'>
  <div className='max-w-[768px] flex justify-center'>
    <div>
      <div className='mb-8 flex justify-center'>
        <img src={house.imageLg} alt='' className='rounded-lg' />
      </div>
       <div className='flex gap-x-6 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl'/>
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl'/>
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl'/>
              <div>{house.surface}</div>
            </div>
          </div>
      <div>{house.description}</div>
    </div>
  </div>
  <div className='flex-1 bg-white w-full max-w-[400px] border border-gray-300 rounded-lg px-8 py-8 shadow-lg'>
    <div className='flex items-center gap-x-4 mb-8'>
      <div className='w-20 h-20 p-1 border border-gray-300 rounded-full flex justify-center'>
        <img src={house.agent.image} alt='' className='rounded-full' />
      </div>
      <div>
        <div className='font-bold text-lg'>{house.agent.name}</div>
        <Link to='' className='text-violet-700 text-sm'>View Listing</Link>
      </div>
    </div>
    <form className='flex flex-col gap-y-6 px-2'>
      <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*' />
      <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*' />
      <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone*' />
      <textarea className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello I Am Interested in Modern Apartment'></textarea>
      <div className='flex gap-x-2'>
        <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
        <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>Call</button>
      </div>
    </form>
  </div>
</div>
</section>
  );
};

export default PropertyDetails;
