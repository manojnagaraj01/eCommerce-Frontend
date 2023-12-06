import React, { useEffect, useRef, useState } from 'react';
import "./Navbar.css"
const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navBarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPos = window.scrollY;

      if (currScrollPos > prevScrollPos) {
        navBarRef.current.style.transform = 'translateY(-105%)';
      } else {
        navBarRef.current.style.transform = 'translateY(0%)';
      }

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className="navbar" ref={navBarRef}>
      <div className="logo">
        <i className="fa-solid fa-font-awesome"></i>
        <a href="#">LOGO</a>
      </div>
      <div className="menu">
        <div className="menu-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <button className="log-in">Log In</button>
      </div>
      <div className="menu-btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
