import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/songs">songs</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}