'use client';
import React, { useState } from 'react';
import SignupFormDemo from '@/components/Sign-Up/sign-up';
import LoginForm from '@/components/Sign-Up/log-in';
import Avatar from 'react-avatar';
import Modal from '@/components/Sign-Up/modal';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
    setClicked(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setClicked(false);
  };

  const clickHandler = (isSignUp: boolean) => {
    setShowSignUpForm(isSignUp);
    setClicked(!clicked);
  };

  const closeModal = () => {
    setClicked(false);
  };

  return (
    <>
      <div className="navbar" style={{ color: 'white' }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" style={{ color: 'white' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow" style={{ color: 'white' }}>
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2" style={{ backgroundColor: '#252B42', color: 'white' }}>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>

          <img src="https://i.postimg.cc/J0tLr1BX/prepify.png" width={100} height={100} style={{ marginLeft: 100, marginBottom: -20, marginTop: -10 }} alt="prepify" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" style={{ color: 'white' }}>
            <li><a href='/'>Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-end" style={{ gap: 20 }}>
          {!isSignedUp && !isLoggedIn && (
            <>
              <a className="btn" style={{ backgroundColor: '#23A6F0', color: 'white' }} onClick={() => clickHandler(false)}>Login</a>
              <a className="btn" style={{ backgroundColor: '#23A6F0', color: 'white', marginRight: 100 }} onClick={() => clickHandler(true)}>Sign Up</a>
            </>
          )}
          {(isSignedUp || isLoggedIn) && (
            <Avatar name="User Name" size="40" round={true} />
          )}
        </div>
      </div>
      <div className="golden-line"></div>
      <Modal isOpen={clicked} onClose={closeModal}>
        {showSignUpForm ? (
          <SignupFormDemo onSignUp={handleSignUp} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </Modal>
    </>
  );
}

export default Navbar;
