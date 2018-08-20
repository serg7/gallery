import React from 'react'
import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap'
import { withRouter } from 'react-router-dom';


class TopMenu extends React.Component {
  render() {
    //const { pathname } = this.props.location;

    //const isActive = this.props.location.pathname === this.props.to;
    //var className = isActive ? 'active' : '';


    // debugger  // eslint-disable-line

    return (
      <Navbar className="topmenu" expand="md">
        <Nav className='types'>
          <NavItem>
            <NavLink href="#/gallery/landscapes">Пейзажи</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/gallery/nu">Ню</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/gallery/still-life">Натюрморты</NavLink>
          </NavItem>
        </Nav>

        <Nav className='misc'>
          <NavItem>
            <NavLink href="#/about">Обо Мне</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/contacts">Контакты</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}



export default withRouter(TopMenu)