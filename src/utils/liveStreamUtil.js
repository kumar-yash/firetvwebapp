import Hls from "hls.js";
import { liveStreamMockUrl } from "../constants/applicationConstants";

const loadHLSForSupportingBrowser = videoElement => {
  let hls = new Hls();
  hls.loadSource(liveStreamMockUrl);
  hls.attachMedia(videoElement);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    videoElement.play();
  });
};

const loadHLSForUnsupportingBrowser = videoElement => {
  videoElement.src = liveStreamMockUrl;
  videoElement.play();
  // videoElement.addEventListener("loadedmetadata", () => {
  //   videoElement.play();
  // });
};

export const addLiveStreamSupport = videoElement => {
  if (Hls.isSupported()) {
    loadHLSForSupportingBrowser(videoElement);
  } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
    loadHLSForUnsupportingBrowser(videoElement);
  }
};

export const removeLoadMetadataEventListner = videoElement => {
  if (!Hls.isSupported())
    videoElement.addEventListener("loadedmetadata", function() {
      videoElement.play();
    });
};
