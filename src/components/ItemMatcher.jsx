import PropTypes from 'prop-types';
import '../styles/ItemMatcher.css';

const ItemMatcher = ({ items, handleLike, handleDislike, likes, dislikes, showAffinityList }) => {
  return (
    <div className="item-matcher">
      <h2>Gostos</h2>
      {items.map((item) => (
        <div key={item.id} className="item">
          <p>{item.name}</p>
          <button
            className={`like-button ${likes.includes(item.id) ? 'selected-like' : ''}`}
            onClick={() => handleLike(item)}
          >
            Gosto
          </button>
          <button
            className={`dislike-button ${dislikes.includes(item.id) ? 'selected-dislike' : ''}`}
            onClick={() => handleDislike(item)}
          >
            Não gosto
          </button>
        </div>
      ))}
      <button className="affinity-button" onClick={showAffinityList}>
        Ver Afinidade
      </button>
    </div>
  );
};

ItemMatcher.propTypes = {
  items: PropTypes.array.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
  likes: PropTypes.array.isRequired,
  dislikes: PropTypes.array.isRequired,
  showAffinityList: PropTypes.func.isRequired,
};

export default ItemMatcher;