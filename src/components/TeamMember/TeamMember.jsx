import './TeamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className='team-member'>
      <div className='profile-header'>
        <div className='profile-image'>
          <img src={member.image} alt={member.name} />
        </div>
        <h2>{member.name}</h2>
      </div>

      <div className='profile-section'>
        <h3>Habilidades</h3>
        <ul className='skills-list'>
          {member.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className='profile-section'>
        <h3>Proyectos</h3>
        <div className='projects-grid'>
          {member.projects.map((project) => (
            <div key={project.name} className='project-card'>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='profile-section'>
        <h3>Tecnologías</h3>
        <div className='tech-icons'>
          {member.technologies.map((tech) => (
            <div key={tech.name} className='tech-icon'>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
