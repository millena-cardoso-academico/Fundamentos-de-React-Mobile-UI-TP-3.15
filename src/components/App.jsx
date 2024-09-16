import { useState } from 'react';
import ItemMatcher from './ItemMatcher';
import UserAffinityList from './UserAffinityList';
import ThemeToggle from './ThemeToggle';
import '../styles/App.css';

const items = [
  { id: 1, name: "Star Wars (Filme)" },
  { id: 2, name: "Bohemian Rhapsody (Música)" },
  { id: 3, name: "The Legend of Zelda (Jogo)" },
  { id: 4, name: "Breaking Bad (Série)" },
  { id: 5, name: "Billie Eilish - Bad Guy (Música)" },
];

const users = [
  { id: 1, name: "João", likes: [1, 2, 3], dislikes: [4, 5] },
  { id: 2, name: "Maria", likes: [1, 4], dislikes: [2, 5, 3] },
  { id: 3, name: "Pedro", likes: [2, 5], dislikes: [1, 3, 4] },
];

function calculateAffinity(userLikes, userDislikes, user) {
  let affinity = 0;
  userLikes.forEach((like) => {
    if (user.likes.includes(like)) affinity += 1;
  });
  userDislikes.forEach((dislike) => {
    if (user.dislikes.includes(dislike)) affinity += 1;
  });
  return affinity;
}

function App() {
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [showAffinityList, setShowAffinityList] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleLike = (item) => {
    if (likes.includes(item.id)) {
      setLikes(likes.filter((like) => like !== item.id));
    } else {
      setLikes([...likes, item.id]);
      setDislikes(dislikes.filter((dislike) => dislike !== item.id));
    }
  };

  const handleDislike = (item) => {
    if (dislikes.includes(item.id)) {
      setDislikes(dislikes.filter((dislike) => dislike !== item.id));
    } else {
      setDislikes([...dislikes, item.id]);
      setLikes(likes.filter((like) => like !== item.id));
    }
  };

  const resetTest = () => {
    setLikes([]);
    setDislikes([]);
    setShowAffinityList(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const affinityList = users
    .map(user => ({
      ...user,
      affinity: calculateAffinity(likes, dislikes, user),
    }))
    .sort((a, b) => b.affinity - a.affinity);

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      {!showAffinityList ? (
        <ItemMatcher
          items={items}
          handleLike={handleLike}
          handleDislike={handleDislike}
          likes={likes}
          dislikes={dislikes}
          showAffinityList={() => setShowAffinityList(true)}
        />
      ) : (
        <>
          <UserAffinityList affinityList={affinityList} />
          <button onClick={resetTest} className="reset-button">Refazer Teste</button>
        </>
      )}
    </div>
  );
}

export default App;