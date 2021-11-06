import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';

const Header = (props) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (document.documentElement.clientWidth < 769) {
      setIsNavOpen(!isNavOpen);
    }
  };

  return (
    <div>
      <Navbar dark className="headbg" expand="md">
        <div className="container">

          <NavbarToggler onClick={toggleNav} className="mr-1" />

          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar className="collapsebg">

              <NavLink className="nav-link navItm" to="/alltasks" onClick={toggleNav}>All Tasks
              </NavLink>

              <NavLink className="nav-link navItm" to="/postatask" onClick={toggleNav}> Post a task
              </NavLink>

              <NavLink className="nav-link navItm" to="/mytasks" onClick={toggleNav}> My Requests
              </NavLink>

              <NavLink className="nav-link navItm" to="/mywork" onClick={toggleNav}> Work
              </NavLink>

            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;