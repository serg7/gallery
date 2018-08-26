import React from 'react'
import PropTypes from 'prop-types'
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
    return (
      <Navbar className="topmenu" expand="md">
        <Nav className='types'>
          <NavItem className={this.props.location.pathname === '/gallery/landscapes' ? 'active' : null}>
            <NavLink href="#/gallery/landscapes">Пейзажи</NavLink>
          </NavItem>
          <NavItem className={this.props.location.pathname === '/gallery/nu' ? 'active' : null}>
            <NavLink href="#/gallery/nu">Ню</NavLink>
          </NavItem>
          <NavItem className={this.props.location.pathname === '/gallery/still-life' ? 'active' : null}>
            <NavLink href="#/gallery/still-life">Натюрморты</NavLink>
          </NavItem>
        </Nav>

        <Nav className='misc'>
          <NavItem className={this.props.location.pathname === '/about' ? 'active' : null}>
            <NavLink href="#/about">Обо Мне</NavLink>
          </NavItem>
          <NavItem className={this.props.location.pathname === '/contacts' ? 'active' : null}>
            <NavLink href="#/contacts">Контакты</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

TopMenu.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(TopMenu)