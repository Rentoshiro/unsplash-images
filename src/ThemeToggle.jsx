import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./Context";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        ) : (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;
