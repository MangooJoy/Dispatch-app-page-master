import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
    <nav>
    <div>
      <NavLink to="/">
        <img src={"./images/dispatch-logo.png"} alt="Home"/>
      </NavLink>
    </div>
    <div>
      <NavLink to="/Top10">
        Top10
      </NavLink>
    </div>
    <div>
      <NavLink to="/News">
        News
      </NavLink>
    </div>
    <div>
      <NavLink to="/Photos">
        Photos
      </NavLink>
    </div>
    <div>
      <NavLink to="/Video">
        Video
      </NavLink>
    </div>
  </nav>
);
}
export default Nav;


