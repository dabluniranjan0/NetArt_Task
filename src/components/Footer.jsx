import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full mt-4'>
        <div className='border-b-2 border-red-600 w-[95%] mx-auto'></div>
        <div >
          <p className='text-center font-bold mt-4' >C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        </div>
        <div className='flex flex-row gap-x-2 mt-4 flex-wrap w-[90%] mx-auto justify-center'>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>CHEMICALS & PROCESS</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>POWER</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>WATER & WASTE WATER</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>OILS & GAS</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>PHARMA</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>SUGARS & DISTILLERIES</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>PAPER & PULP</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>MARINE & DEFENCE</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>METAL & MINING</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>FOOD & BEVERAGE</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>PETROCHEMICAL & REFINERIES</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>SOLAR</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>BUILDING</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>HVAC</div></Link>
            <Link to="#" className='hover:text-red-600'> <div className='border-r-2  border-red-600 pr-2'>FIRE FIGHTING</div></Link>
            <Link to="#" className='hover:text-red-600'> <div>AGRICULTURE & RESIDENTIAL</div></Link>
            
        </div>
        
            <div className='flex mt-6 bg-red-600 text-white py-10 justify-center '>
              <div className='flex flex-col sm:flex-row  gap-4 justify-around sm:w-full'>
              <Link to={`tel:1800 200 1234`} className='hover:scale-110 transition-all duration-200'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white rounded-full text-red-600 size-7 flex items-center justify-center'>
                      <IoMdCall />
                    </div>
                    <span>Toll free 1800 200 1234</span>
                  </div>
                </Link>
                <Link to="https://www.facebook.com/cripumps" target="_blank" className='hover:scale-110 transition-all duration-200'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white rounded-full text-red-600 size-7 flex items-center justify-center'>
                      <FaFacebookF />
                    </div>
                    <span>www.facebook.com/cripumps</span>
                  </div>
                </Link>
                
                <Link to="https://www.crigroups.com" target="_blank" className='hover:scale-110 transition-all duration-200'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-white rounded-full text-red-600 size-7 flex items-center justify-center'>
                      <SlGlobe className='size-7'/>
                    </div>
                    <span>www.crigroups.com</span>
                  </div>
                </Link>
              </div>
        
                
            </div>
       
        
    </div>
  )
}

export default Footer