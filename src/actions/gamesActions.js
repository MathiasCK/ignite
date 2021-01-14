import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

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
