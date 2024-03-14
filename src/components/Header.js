import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        P<span>cl</span>
      </div>
      <div className="right_menu">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
        <Button />
      </div>
    </header>
  );
};

export default Header;
