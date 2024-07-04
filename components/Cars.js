import React, { useState } from 'react';
import Image from 'next/image';
import Car1Img from '../public/img/Cars/1.png'
import Car2Img from '../public/img/Cars/2.png'
import Car3Img from '../public/img/Cars/3.png'
import Car4Img from '../public/img/Cars/4.png'
import Car5Img from '../public/img/Cars/5.png'
import Car6Img from '../public/img/Cars/6.png'
import Car7Img from '../public/img/Cars/7.png'
import Car8Img from '../public/img/Cars/8.png'
import Car9Img from '../public/img/Cars/9.png'
import Car10Img from '../public/img/Cars/10.png'
import Car11Img from '../public/img/Cars/11.png'
import Car12Img from '../public/img/Cars/12.png'
import Badge from '../public/img/Cars/badge.svg'

const cars = [
  {
    id: 1,
    category: 'Toyota',
    name: 'Land Cruiser',
    image: Car1Img,
  },
  {
    id: 2,
    category: 'Audi',
    name: 'A8',
    image: Car2Img,
  },
  {
    id: 3,
    category: 'Porcshe',
    name: '911',
    image: Car3Img,
  },
  {
    id: 4,
    category: 'Ford',
    name: 'Truck',
    image: Car4Img,
  },
  {
    id: 5,
    category: 'Bentley',
    name: 'Mulsane',
    image: Car5Img,
  },
  {
    id: 6,
    category: 'Rolls Royce',
    name: 'Phantom',
    image: Car6Img,
  },
  {
    id: 7,
    category: 'Mercedes',
    name: 'Mayback',
    image: Car7Img,
  },
  {
    id: 8,
    category: 'BMW',
    name: 'I7',
    image: Car8Img,
  },
  {
    id: 9,
    category: 'Honda',
    name: 'Accord',
    image: Car9Img,
  },
  {
    id: 10,
    category: 'Suzuki',
    name: 'Swift',
    image: Car10Img,
  },
  {
    id: 11,
    category: 'Suzuki',
    name: 'Mehran',
    image: Car11Img,
  },
  {
    id: 12,
    category: 'Suzuki',
    name: 'Alto',
    image: Car12Img,
  },
]

const Cars = () => {
  const [carDetails, setCarDetails] = useState(cars[10]);
  const [carIndex, setCarIndex] = useState(10);
  const getCarDetails = (id) => {
    const car = cars.find((car) => {
      return (car.id === id );
    });
    setCarDetails(car);
  }
  return (
    <section className='bg-pets bg-center py-6 over-flow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <div className='hidden xl:flex xl:w-[30%] xl:pl-[160px]'>
          <Image src={Badge} width={230} height={227} alt='' />
        </div>
        <div className='flex-1 flex flex-col lg:flex-row'>
          <div className='lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0'>
            <div className='text-center text-black'>
              <div className='text-[32px] capitalize'>{carDetails.category}</div>
              <div className='uppercase text-[17px] mb-1'>{carDetails.name}</div>
              <div className='w-[150px] h-[150] mx-auto lg:mx-0 '>
                <Image src={carDetails.image} width={150} height={150} alt=''/>
              </div>
            </div>
          </div>
          <div className='relative lg:w-[60%] flex-1 flex items-center'>
            <div className='flex flex-wrap gap-4 justify-center lg:justify-end lg:mr-6'>
              {cars.map((car, index) => {

                return (
                  <div onClick={()=> {
                  getCarDetails(car.id)
                  setCarIndex(index);
                  }} 
                  className='cursor-pointer relative' key={index}>
                    <div className={`w-full h-full absolute rounded-full ${carIndex === index ? 'border-2 border-white' : 'bg-black/40'}`}></div>
                    <Image src={car.image} width={95} height={95} alt='' draggable='false' />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cars;
