import '@styles/experience/experience.css'
import {FaReact, FaPython, FaDocker, FaGit} from 'react-icons/fa' 
import {SiDjango, SiKeycloak} from 'react-icons/si'

function Experience(){
  const experiences = [
    {name: "react", icon: <FaReact/>},
    {name: "python", icon: <FaPython/>},
    {name: "docker", icon: <FaDocker/>},
    {name: "git", icon: <FaGit/>},
    {name: "django", icon: <SiDjango/>},
    {name: "keycloak", icon: <SiKeycloak/>},
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