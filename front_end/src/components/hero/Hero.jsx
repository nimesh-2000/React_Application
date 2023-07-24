//import { style } from '@mui/system';
import * as React from 'react';
//import { useNavigate } from 'react-router-dom';
 import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Hero.css';




function Hero() {

    // const navigate = useNavigate();

    // const handleGetStartClick =(event) =>{
    //   event.preventDefault();
    //   navigate("/Login");
    // }

  return (
    <div className='mainDiv'>
   <section className="s1">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className='hGet'>Get Hot Deals on Smart Phones</h1>
            <p className="max-w-2xl mb-6 font-bold text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Make your life greater than before.</p>
            <Link to={"/Login"}>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </Link>
            {/* <Link to={"/Login"}>
            <Button variant="outlined">Get Started</Button>
            </Link> */}
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex" id='himg'>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
        </div>                
    </div>
</section>
</div>
  );

  
}
export default Hero;

       