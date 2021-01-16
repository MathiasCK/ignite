import logo from "../img/logo.svg";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <Search>
        <input type="text" />
        <span class="border"></span>
        <button>Search</button>
      </Search>
    </StyledNav>
  );
};

const Search = styled(motion.div)`
  position: relative;
`;

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    position: relative;
    & ~ .border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #ff7676;
    }
    &:focus ~ .border {
      width: 100%;
      transition: 0.5s;
    }
  }
  button {
    font-size: 1.5rem;
    border: 1px solid #ff7676;
    padding: 0.25rem 2rem;
    margin: 0 1rem;
    cursor: pointer;
    background: white;
    color: black;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #ff7676;
      color: white;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  color: #ff7676;
`;

export default Nav;
