import PropTypes from 'prop-types';
import '../styles/UserAffinityList.css';

const UserAffinityList = ({ affinityList }) => {
  return (
    <div className="user-affinity-list">
      <h2>Usuários com Gostos Parecidos</h2>
      <ul>
        {affinityList.map((user) => (
          <li key={user.id}>
            {user.name} - Afinidade: {user.affinity}
          </li>
        ))}
      </ul>
    </div>
  );
};

UserAffinityList.propTypes = {
  affinityList: PropTypes.array.isRequired,
};

export default UserAffinityList;