import PropTypes from 'prop-types';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Alternar para {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default ThemeToggle;