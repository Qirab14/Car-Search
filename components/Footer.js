import React from 'react';
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6'>Car Search</div>
        </div>
        <div className='text-white flex-1'> 
          <ul className='flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='flex justify-center lg:justify-start text-white'>
          <div className='mr-6'>Follow</div>
          <ul className='flex gap-x-4'>
            <li>
              <a href='#'>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href='#'>
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href='#'>
                <BsTwitterX />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
