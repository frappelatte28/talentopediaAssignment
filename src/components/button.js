import "./button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="/signUp">
      <button className="signUpBtn">Sign up</button>
    </Link>
  );
}
