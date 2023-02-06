// Styled Component
import { MyAppStyle } from "./styles/MyAppStyle";

// library animation
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

// Icons
import { AiFillGithub } from "react-icons/ai/index";
import { AiFillLinkedin } from "react-icons/ai/index";
import { AiFillInstagram } from "react-icons/ai/index";
import { SiCodewars } from "react-icons/si/index";
import { MdDarkMode } from "react-icons/md/index";
import { BsFillSunFill } from "react-icons/bs/index";

// Hooks
import { useGithub } from "./hooks/useGitHub";
import { useEffect, useState } from "react";

export function App() {
  const [darktheme, setDarktheme] = useState(false);

  useEffect(() => {
    let themeStored = localStorage.getItem("dark");

    const theme = themeStored ? JSON.parse(themeStored).theme : false;

    setDarktheme(theme);
  }, []);

  // function to toggle theme
  function toggleTheme() {
    localStorage.setItem("dark", JSON.stringify({ theme: !darktheme }));

    setDarktheme(!darktheme);
  }

  // Fetch github data
  const { profile, isLoading, isError } = useGithub(
    "https://api.github.com/users/victorhsdev"
  );

  return (
    <MyAppStyle theme={darktheme}>
      <div className="perfil">
        {/* Profile Image */}
        <img
          src="assets/victor.png"
          alt="Victor"
          title="Victor Hugo da Silva"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        />

        {/* Profile Title */}
        <h1 data-aos="fade-right" data-aos-delay="1000" data-aos-duration="900">
          @victorhsdev
        </h1>

        {/* Link List */}
        <ul>
          <li data-aos="zoom-in" data-aos-delay="500" data-aos-duration="900">
            <a
              href="https://github.com/victorhsdev"
              title="Github"
              target="_blank"
            >
              <AiFillGithub size={24} />
              GITHUB
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="600" data-aos-duration="900">
            <a
              href="https://www.linkedin.com/in/victorsilvadev"
              title="LinkedIn"
              target="_blank"
            >
              <AiFillLinkedin size={24} />
              LINKEDIN
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="700" data-aos-duration="900">
            <a
              href="https://www.instagram.com/victorsilvadev18/"
              title="Instagram"
              target="_blank"
            >
              <AiFillInstagram size={24} />
              INSTAGRAM
            </a>
          </li>
          <li data-aos="zoom-in" data-aos-delay="800" data-aos-duration="900">
            <a
              href="https://www.codewars.com/users/Victor%20Hugo%20da%20Silva"
              title="CodeWars"
              target="_blank"
            >
              <SiCodewars size={24} />
              CODEWARS
            </a>
          </li>
        </ul>

        {/* Another resources */}
        {isLoading ? (
          <h3
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="900"
          >
            Carregando ...
          </h3>
        ) : isError ? (
          <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="900">
            [ERROR]. Falha na requisição
          </p>
        ) : (
          <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="900">
            {profile?.bio}
          </p>
        )}
      </div>

      {/* Absolute theme toggle button */}
      <div className="toggleButton">
        <button onClick={toggleTheme}>
          {darktheme ? <MdDarkMode size={32} /> : <BsFillSunFill size={32} />}
        </button>
      </div>
    </MyAppStyle>
  );
}
