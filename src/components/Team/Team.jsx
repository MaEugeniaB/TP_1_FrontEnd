import { useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './Team.css';

const teamData = [
  {
    name: 'Juan Pérez',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
    projects: [
      {
        name: 'E-commerce Platform',
        description:
          'Desarrollo de una plataforma de comercio electrónico con React y Node.js',
      },
      {
        name: 'Task Manager App',
        description:
          'Aplicación de gestión de tareas con funcionalidades colaborativas',
      },
      {
        name: 'Portfolio Website',
        description:
          'Sitio web personal con diseño responsive y animaciones personalizadas',
      },
    ],
    technologies: [
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      },
      {
        name: 'Git',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      },
    ],
  },
  {
    name: 'Ana García',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    skills: ['HTML5', 'CSS3', 'Vue.js', 'PHP', 'MySQL'],
    projects: [
      {
        name: 'CMS Dashboard',
        description:
          'Sistema de gestión de contenidos con panel de administración',
      },
      {
        name: 'Social Media App',
        description:
          'Aplicación de red social con características de mensajería en tiempo real',
      },
      {
        name: 'Online Learning Platform',
        description:
          'Plataforma educativa con cursos interactivos y seguimiento de progreso',
      },
    ],
    technologies: [
      {
        name: 'Vue.js',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'PHP',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
      },
      {
        name: 'MySQL',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
      },
      {
        name: 'HTML5',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
      },
    ],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberSelect = (member) => {
    console.log(member);
    setSelectedMember(member);
  };

  const handleBack = () => {
    setSelectedMember(null);
  };

  if (selectedMember) {
    return (
      <div className='team-container'>
        <button className='back-button' onClick={handleBack}>
          ← Volver
        </button>
        <TeamMember member={selectedMember} />
      </div>
    );
  }

  return (
    <div className='team-container'>
      <h1>Perfiles del Equipo</h1>
      <div className='team-profiles'>
        {teamData.map((member) => (
          <div
            key={member.name}
            className='team-profile-card'
            onClick={() => handleMemberSelect(member)}>
            <div className='profile-image'>
              <img src={member.image} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <div className='skills-preview'>
              {member.skills.slice(0, 3).map((skill) => (
                <span key={skill} className='skill-tag'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;