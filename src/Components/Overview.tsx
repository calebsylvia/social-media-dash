import React from 'react'
import insta from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

const Overview = () => {
  return (
    <div className='relative mx-auto w-4/5 pb-10'>
        <p className='text-lightMode-darkGrayishBlue dark:text-darkMode-text font-bold text-xl md:text-3xl pb-6'>Overview - Today</p>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-7'>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full max-md:mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Page Views</p>
                    <img src={facebook} alt="Facebook Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>87</p>
                    <div className='flex items-center gap-1'>
                        <img src={up} alt="Up Arrow" className='h-2'/>
                        <p className='text-main-limeGreen font-bold'>3%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Likes</p>
                    <img src={facebook} alt="Facebook Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>52</p>
                    <div className='flex items-center gap-1'>
                        <img src={down} alt="Down Arrow" className='h-2'/>
                        <p className='text-main-brightRed font-bold'>2%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Likes</p>
                    <img src={insta} alt="Instagram Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>5462</p>
                    <div className='flex items-center gap-1'>
                        <img src={up} alt="Up Arrow" className='h-2'/>
                        <p className='text-main-limeGreen font-bold'>2257%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Profile Views</p>
                    <img src={insta} alt="Instagram Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>52k</p>
                    <div className='flex items-center gap-1'>
                        <img src={up} alt="Up Arrow" className='h-2'/>
                        <p className='text-main-limeGreen font-bold'>1375%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full max-md:mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Retweets</p>
                    <img src={twitter} alt="Twitter Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>117</p>
                    <div className='flex items-center gap-1'>
                        <img src={up} alt="Up Arrow" className='h-2'/>
                        <p className='text-main-limeGreen font-bold'>303%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Page Views</p>
                    <img src={twitter} alt="Twitter Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>507</p>
                    <div className='flex items-center gap-1'>
                        <img src={up} alt="Up Arrow" className='h-2'/>
                        <p className='text-main-limeGreen font-bold'>553%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Page Views</p>
                    <img src={youtube} alt="Youtube Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>107</p>
                    <div className='flex items-center gap-1'>
                        <img src={down} alt="Down Arrow" className='h-2'/>
                        <p className='text-main-brightRed font-bold'>19%</p>
                    </div>
                </div>
            </div>

            <div className='bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 p-7 rounded-lg w-full mx-auto'>
                <div className='flex justify-between'>   
                    <p className='font-bold text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>Total Views</p>
                    <img src={youtube} alt="Youtube Logo" className='w-6 h-6'/>
                </div>
                <div className='flex justify-between pt-4 md:pt-10'>
                    <p className='text-4xl font-bold text-lightMode-text dark:text-darkMode-text'>1407</p>
                    <div className='flex items-center gap-1'>
                        <img src={down} alt="Down Arrow" className='h-2'/>
                        <p className='text-main-brightRed font-bold'>12%</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Overview