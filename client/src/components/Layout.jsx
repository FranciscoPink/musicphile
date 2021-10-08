// import { Link } from "react-router-dom";
import Nav from './Nav'

export default function Layout(props) {
  return (
    <div className="layout">
      {/* <Link to="/songs">songs</Link> */}
      <Nav />
      <div className="layout-children">{props.children}</div>
    </div>
  )
}