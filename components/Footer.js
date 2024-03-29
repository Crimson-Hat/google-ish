import { LocationMarkerIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer>
      <span>
        <LocationMarkerIcon /> India | English <a href="#">官话</a>
        <a href="#">español</a>
        <a href="#">عربى</a>
        <a href="#">More...</a>
      </span>
      <span className="fright">
        <a href="#">Privacy</a>
        <a href="#">T&C</a>
        <a href="#">About</a>
        <a href="https://alvin-wachira.netlify.app/">Designed By: Alvin Wachira</a>
      </span>
    </footer>
  );
};

export default Footer;
