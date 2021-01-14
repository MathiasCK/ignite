import { motion } from "framer-motion";
import styled from "styled-components";

// Redux
import { useDispatch } from "react-redux";
import loadDetail from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";

const Game = ({ name, released, image, id }) => {
  // Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 40vh;
    object-fit: cover;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default Game;
