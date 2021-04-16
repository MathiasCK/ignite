const initialState = {
  game: {
    platforms: [],
  },
  screen: {
    results: [],
  },
  isLoading: true,
  developer: [],
  genres: [],
  website: "",
  background_image: "",
  background_image_additional: "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
        developer: action.payload.developer,
        genres: action.payload.genres,
        website: action.payload.website,
        background_image_additional: action.payload.background_image_additional,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "REMOVE_DETAIL":
      return {
        ...state,
        game: initialState.game,
      };
    default: {
      return { ...state };
    }
  }
};

export default detailReducer;
