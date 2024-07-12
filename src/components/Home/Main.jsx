import React from 'react'
import mainImg from '../../assets/page1main.png'
import subImg from '../../assets/page1sub.png'
import watermark from '../../assets/watermark.png'

const Main = () => {

  return (

    <div className='h-[calc(100vh-80px)] flex gap-2 pl-24 items-center justify-between'>

        <div className='h-[100%] flex flex-col justify-between text-left pt-4 pb-8'>
            <img src={watermark} alt="" className='w-[80px]'/>

            <div>
                <div className='font-[heading] text-[48px] leading-[48px]'>
                    Contemporary <br />Designs Made With <br />Innovation
                </div>
                <div className='mt-6 font-[body] text-xs'>
                    The standard chunk of Lorem Ipsum used since the 1500s is <br />reproduced below for those interested. Sections 1.10.32 and <br />1.10.33 from 
                </div>
                <button className='mt-12 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)]'>
                    KNOW MORE ABOUT US
                </button>
            </div>
        </div>

        <div className='h-[100%] pt-4'>
            <img src={mainImg} alt="" className='max-h-[100%] object-cover'/>
        </div>
        
        <div>
            <img src={subImg} alt="" />
        </div>

    </div>

  )
}

export default Main