import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/create">Share A Find</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/browse">Browse</Link>
      </nav>
    </div>
  )
}