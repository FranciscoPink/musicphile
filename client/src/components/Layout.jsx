import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div className="layout">
      <Link to="/songs">songs</Link>
      <div className="layout-children">{props.children}</div>
    </div>
  )
}