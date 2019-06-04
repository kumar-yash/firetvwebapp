import { route } from "preact-router";

export const videoActions = {
  SET_VIDEO_PLAYER_DATA: "SET_VIDEO_PLAYER_DATA"
};

export const setVideoPlayerDataAction = videoData => {
  return {
    type: videoActions.SET_VIDEO_PLAYER_DATA,
    payload: videoData
  };
};

export const setVideoPlayerData = videoData => dispatch => {
  //   console.log("dsa.fjjbadskfjanbsd");
  dispatch(setVideoPlayerDataAction(videoData));
  route("/videoplayer");
  console.log(videoData);
};
