import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaList = () => {
  return (
    <div className="flex space-x-4 fa-xl">
      <a
        href="https://twitter.com/ash_padhi"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href="https://github.com/Ashutoshpadhi629"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-500 hover:text-indigo-700"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/ashutoshpadhi629/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/ash_padhi/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};
const SocialMediabar = () => {
  return (
    <div>
      <div className="flex  flex-col fa-2xl bg-white p-3 rounded-xl">
        <a
          href="https://twitter.com/ash_padhi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 p-2"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/Ashutoshpadhi629"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-700 p-2"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/ashutoshpadhi629/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 p-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/ash_padhi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 p-2"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export { SocialMediaList, SocialMediabar };
