import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from "reactstrap";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar color="faded blue" light>
          <NavbarBrand className="me-auto" href="/">
            reactstrap
          </NavbarBrand>
          <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/meetups">Meet Up</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/meetups/add">Add Meet Up</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/about">Abount</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
