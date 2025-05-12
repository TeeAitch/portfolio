
import '@styles/home/Home.css'
import image from '../../public/vite.svg'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { socialLinks } from '@/config'
function Home(){
  return (
    <div className='home'>
      <img src={image} alt="nothing"/>
        <div className='home-right'>
            <div className='home-right-text'>
              <p>Hello I'm</p>
              <p className='home-right-text-name'>Tolga Han</p>
              <p className='home-right-text-title'>Full-Stack Developer</p>
            </div>
            <div className='home-right-links'>   
              <a 
                href={socialLinks.linkedIn}
                target='_blank'
                
                > <FaLinkedin className='home-right-links-icon'/>
              </a>
              <a 
                href={socialLinks.github}
                target='_blank'
                > <FaGithub className='home-right-links-icon'/> 
              </a>    

            </div>
        </div>
    </div>
  )
}
export default Home