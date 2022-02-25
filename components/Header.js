import Image from 'next/image';
import React, { useState } from 'react';

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const resetInput = () => {
    setSearchInput('');
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };
  return (
    <header className='items-center sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 w-28 justify-start'
      >
        <Image
          className=' cursor-pointer'
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Medium - Search */}
      <div className='md:shadow-sm flex items-center shadow md:border-2 rounded-full py-2'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow bg-transparent outline-none truncate
          px-5 text-sm text-gray-600 placeholder-gray-400'
          placeholder={placeholder || 'Start your search'}
          type='text'
        />
        <SearchIcon
          className='hidden md:inline-flex 
          cursor-pointer bg-red-400 rounded-full p-2 h-8 text-white md:mx-2'
        />
      </div>
      {/* Right */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col mx-auto px-4 col-span-3 mt-4'>
          <DateRangePicker
            staticRanges={[]}
            inputRanges={[]}
            onChange={handleSelect}
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              min={1}
              className='w-12 pl-4 text-lg text-red-400 outline-none'
              type='number'
            />
          </div>
          <div className='flex space-x-4'>
            <button
              onClick={resetInput}
              className='button flex-grow text-gray-500 bg-gray-100 rounded-md hover:bg-gray-400 hover:text-slate-50 '
            >
              Cancel
            </button>
            <button
              onClick={search}
              className='button flex-grow text-red-400 bg-gray-100 rounded-md hover:bg-red-400 hover:text-slate-50'
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
