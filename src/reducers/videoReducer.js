import { videoActions } from "../actions/videoActions";

const initialState = {
  videoData: { url: null }
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case videoActions.SET_VIDEO_PLAYER_DATA:
      //   console.log(homeActions);
      return { ...state, videoData: action.payload };
    default:
      return state;
  }
};

export default videoReducer;
