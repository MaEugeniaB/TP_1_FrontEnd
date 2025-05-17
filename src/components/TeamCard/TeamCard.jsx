import './TeamCard.css';

const TeamCard = ({ name, image }) => {
  return (
    <div className='team-card'>
      <div className='team-card-image'>
        <img src={image} alt={name} />
      </div>
      <h3 className='team-card-name'>{name}</h3>
    </div>
  );
};

export default TeamCard;
