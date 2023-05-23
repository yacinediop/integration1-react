import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
    import  {  Nav, Navbar,  }from 'react-bootstrap';
    import Down from "./Image/icon-arrow-down.svg";
    
    const NavBar = () => {
      useEffect(() => {
        AOS.init();
      }, [])
      return (
        <section className='bar'>
            <Navbar expand="md" >
          <Navbar.Brand href="/">
            <span className='text-white sun'> Sunnuside</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto mt-5 ">
               <Nav.Link href="#home"><span className='text-white ms-2'>Home</span></Nav.Link>
               <Nav.Link href="#skills" ><span className='text-white ms-2'>Skills</span></Nav.Link>
               <Nav.Link href="#projects" ><span className='text-white me-2'>Projects</span></Nav.Link>
               <a href="/">
                <button className='boutton bg-none'>Connect</button>
               </a>
             </Nav>
          </Navbar.Collapse>

      </Navbar>
      <h1 className=" creer pt-5 ">WE ARE CREATIVES?</h1>
          <div data-aos="fade-up" className="arrow">
              <img src={Down} alt="gi" className="do"/>
          </div>
        </section>
      
      );
}
export default NavBar;
