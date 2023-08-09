import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import './Navbar.css';

const NavBar = () => {
  return (
    <nav id='navbar'>
      <h2>
        <Link to="/"><BiCameraMovie />BuscaFilmes</Link>
      </h2>
      <form>
        <input type="text" placeholder='Procure um filme' />
        <button type='submit'><BiSearchAlt2 /></button>
      </form>
    </nav>
  )
}

export default NavBar