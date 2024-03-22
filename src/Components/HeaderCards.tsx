import React from 'react'
import insta from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'


const HeaderCards = () => {


  return (
    <div className="relative mx-auto w-4/5 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        <div className="bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-center w-full max-md:mx-auto">
            <div className='bg-main-facebook h-1 rounded-t-lg'></div>
            <div className='flex gap-2 justify-center pt-8 pb-2'>
              <img src={facebook} alt="Facebook Logo"/>
              <p className='text-sm text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>@nathanf</p>
            </div>
            <div className='py-4 md:py-7'>
              <p className='text-7xl font-bold text-lightMode-text dark:text-darkMode-text'>1987</p>
              <p className='tracking-[0.25rem] text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>FOLLOWERS</p>
            </div>
            <div className='flex text-center justify-center pb-6 items-center gap-2'>
              <img className='h-[6px]' src={up} alt="Up arrow" />
              <p className='font-bold text-main-limeGreen'>12 Today</p>
            </div>
        </div>

        <div className="bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-center w-full mx-auto">
            <div className='bg-main-twitter h-1 rounded-t-lg'></div>
            <div className='flex gap-2 justify-center pt-8 pb-2'>
              <img src={twitter} alt="Twitter Logo"/>
              <p className='text-sm text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>@nathanf</p>
            </div>
            <div className='py-4 md:py-7'>
              <p className='text-7xl font-bold text-lightMode-text dark:text-darkMode-text'>1044</p>
              <p className='tracking-[0.25rem] text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>FOLLOWERS</p>
            </div>
            <div className='flex text-center justify-center pb-6 items-center gap-2'>
              <img className='h-[6px]' src={up} alt="Up arrow" />
              <p className='font-bold text-main-limeGreen'>99 Today</p>
            </div>
        </div>

        <div className="bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-center w-full mx-auto">
            <div className='bg-gradient-to-r from-yellow-200 to-pink-500 h-1 rounded-t-lg'></div>
            <div className='flex gap-2 justify-center pt-8 pb-2'>
              <img src={insta} alt="Instagram Logo"/>
              <p className='text-sm text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>@realnathanf</p>
            </div>
            <div className='py-4 md:py-7'>
              <p className='text-7xl font-bold text-lightMode-text dark:text-darkMode-text'>11k</p>
              <p className='tracking-[0.25rem] text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>FOLLOWERS</p>
            </div>
            <div className='flex text-center justify-center pb-6 items-center gap-2'>
              <img className='h-[6px]' src={up} alt="Up arrow" />
              <p className='font-bold text-main-limeGreen'>1099 Today</p>
            </div>
        </div>

        <div className="bg-lightMode-lightGrayishBlue dark:bg-darkMode-darkDesatBlue hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-center w-full mx-auto">
            <div className='bg-main-youtube h-1 rounded-t-lg'></div>
            <div className='flex gap-2 justify-center pt-8 pb-2'>
              <img src={youtube} alt="Youtube Logo"/>
              <p className='text-sm text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>@nathanf</p>
            </div>
            <div className='py-4 md:py-7'>
              <p className='text-7xl font-bold text-lightMode-text dark:text-darkMode-text'>8239</p>
              <p className='tracking-[0.25rem] text-lightMode-darkGrayishBlue dark:text-darkMode-desatBlue'>SUBSCRIBERS</p>
            </div>
            <div className='flex text-center justify-center pb-6 items-center gap-2'>
              <img className='h-[6px]' src={down} alt="Down arrow" />
              <p className='font-bold text-main-brightRed'>144 Today</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCards