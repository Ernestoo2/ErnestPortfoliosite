import profilepic from "../assets/ErnestProfile.jpg";
import { HERO_CONTENT } from "constants";

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full flex flex-col lg:flex-row '>
          <div className='flex w-full lg:w-1/2 flex-col items-center lg:items-start'>
            <h1 animate={{ x: 0 }}  className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Eze Ernest
            </h1>
            <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {' '}
              {HERO_CONTENT}
            </p>
            
          </div>
          <div className='w-full  lg:w-1/2  lg:p-8 '>
              <div className='flex justify-center'>
                <img className="rounded-2xl " src={profilepic} alt='' />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
