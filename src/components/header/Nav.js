import { NavLink }  from 'react-router-dom';

const Nav = () => (
  <nav >
    <ul className="wrapper">
      <li className="nav-links"><NavLink to='/'>Home</NavLink></li>
      <li className="nav-links"><NavLink to='/Confession'>Confession</NavLink></li>
      <li className="nav-links"><NavLink to='/Misdemeanour'>Misdemeanour</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
