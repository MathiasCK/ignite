import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameURL,
} from "../api";
// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularData.data.results,
      newGames: newData.data.results,
      upcomingGames: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchedGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
