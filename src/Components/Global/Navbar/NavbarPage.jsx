import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBCol } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
import  "./NavbarPage.scss";
export const NavbarPage = () => {

      const [isOPen , setIsOPen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

const openMNav =()=> {
    setIsOPen(true)

}

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    //
    return (
        <div className="Navbar-Container">
     <MDBNavbar color="transparant" dark expand="md">
        <MDBNavbarBrand>
        <img src="https://www.equity.co.id/sites/default/files/logo-equity-life.jpg" alt=""/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={openMNav} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOPen} navbar>
          <MDBNavbarNav left>
            {/* profil */}
            <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline"><b>PROFIL</b></div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>
            {/* profil end */}
          {/* Layanan */}
          <MDBNavItem>
          <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline"><b>LAYANAN</b></div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavItem>

          {/* layanan end */}
          {/* kanal distribusi */}
          <MDBNavItem>
          <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline"><b>KANAL DISTRIBUSI</b></div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          {/* kanal distribusi end */}
            <MDBNavItem>
              <MDBNavLink to="#!"><b>NAV</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"><b>BERITA</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"><b>DPLK</b></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right className="mr-5">
            <MDBNavItem>
            <MDBCol>
              <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </MDBCol>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle className="mt-3 mb-4" nav caret>
                  <MDBIcon icon="user lg" />
                </MDBDropdownToggle >
                <MDBDropdownMenu className="dropdown-right mt-5  ">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
            </div>

    )
}
