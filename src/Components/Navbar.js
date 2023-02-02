import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
  return<nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">RTD</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
    <li className="nav-item">
    <Link to='/'>HOME</Link>
</li>
  <li className="nav-item">
  <Link to='/reg'>REGISTRATION</Link>
</li>
  <li className="nav-item ">
  <Link to='/lic'>LICENSE</Link>
</li>
  <li className="nav-item ">
  <Link to='/per'>PERMIT</Link>
</li>
</ul>
</div>
  <div id="log">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ">
    <li className="nav-item ">
    <Link to='/'>LOGOUT</Link>
    </li>
</ul>
</div>
</div>
</div>
</nav>
}
export default Navbar;
