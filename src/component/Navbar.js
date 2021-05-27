import {
  Link,
} from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => (
  <div className="nav-toggle">
    <h1>Math Magicians</h1>
    <div className="nav-r">
      <Link to="/">Home| </Link>
      <Link to="/App">Calculator|</Link>
      <Link to="/Quote">Quote </Link>
    </div>
  </div>
);
export default Navbar;
