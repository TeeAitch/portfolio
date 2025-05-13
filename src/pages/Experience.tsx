import '@styles/experience/experience.css'
import {FaReact, FaPython, FaDocker, FaGit, FaJava} from 'react-icons/fa' 
import {SiDjango, SiTypescript, SiSpringboot} from 'react-icons/si'

function Experience(){
  const experiences = [
    {name: "react", icon: <FaReact/>},
    {name: "python", icon: <FaPython/>},
    {name: "docker", icon: <FaDocker/>},
    {name: "git", icon: <FaGit/>},
    {name: "django", icon: <SiDjango/>},
    {name: "java", icon: <FaJava/>},
    {name: "typescript", icon: <SiTypescript/>},
    {name: "Spring Boot", icon: <SiSpringboot/>},
  ]

  return (
    <div className='wrapper'>
      {experiences.map((experience) => (
        <div className='exp'>
          <span className='icon'>{experience.icon}</span>
          <p>{experience.name}</p>
        </div>
      ))}
    </div>
  )
}
export default Experience