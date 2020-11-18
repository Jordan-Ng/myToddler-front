import React, {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {useAuth0} from '@auth0/auth0-react'
  
  const Navebar = () => {
    const {logout, user} = useAuth0()
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        {/* <Navbar color="primary" light expand="md">
          <NavbarBrand href="/" className='text-white'>myToddler</NavbarBrand>
            <NavbarText className='text-white' onClick={logout}>
              {user.nickname} 
              </NavbarText> */}
              
        {/* </Navbar> */}
        <Navbar color="primary" light expand="md">
        <NavbarBrand className='text-white' href="/">myToddler</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText className='text-white'style={{marginRight: '1vw'}}>{user.nickname}</NavbarText>
          <NavbarText className='text-white' onClick={() => logout({returnTo: window.location.origin})} style={{borderLeft: '1px solid white', paddingTop:'0px', paddingBottom: '0px', paddingLeft: '1vw'}}>
            logout
          </NavbarText>
        {/* </Collapse> */}
      </Navbar>
      </div>
    );
  }

  export default Navebar