
import '@styles/home/Home.css'
import picture from '../../public/picture.jpg'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { socialLinks } from '@/config'
function Home(){
  return (
    <div className='home'>
        <div className='home-right'>
            <div className='home-right-text'>
              <p>Hello I'm
              <span className='home-right-text-name'> Tolga <br/></span>
              <span className='home-text'>Fullstack developer with completed vocational training as an IT specialist for application development and one year of project experience in an agile environment with Java, Javascript, Typescript, C# and Python.</span>
              </p>
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
        <img className="home-image" src={picture} alt="nothing"/>
    </div>
  )
}
export default Home