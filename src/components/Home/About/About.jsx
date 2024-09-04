import React from 'react'
import imgBg from '../../../assets/product1.png'
import imgFront from '../../../assets/page1sub.png'
import './About.css'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className='About'>
            <div className='HomeAboutImgContainer'>
                <div className='HomeAbout_BgImgDiv'>
                    <img src={imgBg} />
                </div>
                <div className='HomeAbout_FrontImgDiv'>
                    <img src={imgFront} />
                </div>
            </div>

            <div className='HomeAboutContent'>
                <div className='font-subheading text-2xl'>
                    Made for you
                </div>
                <div className='font-heading text-6xl'>
                    Fine Jewellery Collection
                </div>
                <div className='font-body'>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
                <Link to='/ourstory'>
                    <button className='mt-4 text-xs font-bold py-3 px-6 border-2 border-[var(--primary)] self-start'>
                        KNOW MORE ABOUT US
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About