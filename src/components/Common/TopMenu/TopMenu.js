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


class TopMenu extends React.Component {
    constructor(props) {
        super(props)
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        }
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }

      render() {
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

export default TopMenu