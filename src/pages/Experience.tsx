import '@styles/experience/experience.css'
import { FaReact, FaPython, FaDocker, FaGit, FaJava, FaJenkins } from 'react-icons/fa'
import { SiDjango, SiTypescript, SiSpringboot } from 'react-icons/si'

function Experience() {
  const experiences = [
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Jenkins", icon: <FaJenkins /> },
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
export default Experience;