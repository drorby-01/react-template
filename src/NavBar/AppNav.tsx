import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {routerData} from "../controlers/router controler/routerControler"
import {NavLink} from "react-router-dom"

function AppNav() {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {
          routerData.map((element:any)=>{
            const {path,name} = element
          return <NavLink to={path}>{name}</NavLink>
        })
      }
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
}

export default AppNav
