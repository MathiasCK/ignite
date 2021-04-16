import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
      developer: detailData.data.developers,
      genres: detailData.data.genres,
      website: detailData.data.website,
      background_1: detailData.data.background_image,
      background_2: detailData.data.background_image_additional,
    },
  });
};

export default loadDetail;
