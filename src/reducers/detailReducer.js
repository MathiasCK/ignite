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
