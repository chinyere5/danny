import React from 'react';
// import {Link} from 'react-router-dom';
import Logo from '../Images/Group 60.png';




const Navbar = () => (
  
<div className="main-nav">
<div className="menuItems">
<div className="row">
  <div className="menu1 col-md-2"> Call: +234 9012624162</div>
  <div className="menu2 col-md-3"> Support: info@yourcompany.com</div>
  <div className="menu3 col-md-3"></div>

<div className="menu4 col-md-3">
<a href="log">log in</a><span className="mx-5"> 
<button className="btn btn-success btn-sm"> Register </button>
</span>


</div>
  
</div>


</div>



 <header>

 <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-sm-around" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item mx-4">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="/">About</a>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="/">Services</a>

        </li>

        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="/">instructors</a>
        </li>

        <li className="nav-item dropdown mx-4">
          <a className="nav-link dropdown-toggle text-light" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            courses 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item mx-4">
          <a className="nav-link text-light" href="/">blog</a>
        </li>
        <button className="btn btn-success btn-sm bg-gradient  "> Contact </button>
      </ul>
    </div>
  </div>
</nav>





</header>

</div>









  
)

export default Navbar

  

      