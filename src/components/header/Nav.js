import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav >
    <ul className="navbar-nav" >
      <li className="nav-item ">FAKELANDIA JUSTICE DEPARTMENT</li>
      <li className="nav-item "> <NavLink activeClassName="active" to="/" > Home </NavLink>   </li>
      <li className="nav-item "> <NavLink activeClassName="active" to="/Confession" >Confess To Us</NavLink>  </li>
      <li className="nav-item "> <NavLink activeClassName="active" to="/Misdemeanour"> Misdemeanour </NavLink>  </li>
    </ul>
  </nav>
);
    
export default Nav;
