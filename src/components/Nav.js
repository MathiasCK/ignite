import logo from "../img/logo.svg";
import {motion} from "framer-motion";
import {React, useState} from "react";
import styled from "styled-components";

// Redux and routes
import {fetchSearch} from "../actions/gamesActions";
import {useDispatch} from "react-redux";
import {fadeIn} from "../animations";

const Nav = ({setSearch}) => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setSearch(textInput);
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <input
        placeholder="Search for games"
        value={textInput}
        type="text"
        onChange={inputHandler}
      />
      <span class="border"></span>
      <button type="submit" onClick={submitSearch}>
        Search
      </button>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  /*position: fixed;
  width: 100%;
  backdrop-filter: saturate(180%) blur(5px);
  opacity: 0.9;
  z-index: 100;*/
  padding: 1rem 2rem 5rem;
  text-align: center;
  background: white;
  input {
    width: 80%;
    font-size: 1.5rem;
    padding: 1rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    &::placeholder {
      font-size: medium;
      font-family: inherit;
    }
    @media screen and (min-width: 1400px) {
      width: 30%;
    }
  }
  button {
    font-size: 1.5rem;
    border: 1px solid #ff7676;
    padding: 1rem;
    margin: 1rem;
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

/*const Input = styled(motion.div)`
  background: red;
  width: 100%;
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
`;*/

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  color: #ff7676;
`;

export default Nav;
