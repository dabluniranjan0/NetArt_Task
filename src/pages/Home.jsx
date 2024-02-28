import React from 'react'
import medal from '../assets/1.png'
import banner from '../assets/2.png'

const Home = () => {
  return (
    <div>

        <div className='flex flex-col sm:flex-row items-center'>
            <div className='sm:w-[37%] flex justify-center'>
                <img src={medal} alt="medal" className='w-[40%] sm:w-[100%]' />
            </div>

            <div className='sm:w-[63%]'>
                <div className='mb-4 font-bold'>
                  <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                </div>

                <div className='ps-4'>
                  <ul className='list-disc'>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                  </ul>
                  
                </div>
                <div className='my-6'>
                      <img src={banner} alt="banner" />
                </div>
                <div>
                    <p>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home