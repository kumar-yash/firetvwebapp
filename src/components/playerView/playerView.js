import { h, Component } from "preact";
import {
  addLiveStreamSupport,
  removeLoadMetadataEventListner
} from "../../utils/liveStreamUtil";
// const videoUrl = require("./sample_video.mp4");
import styles from "./playerView.scss";
import { connect } from "preact-redux";

const remoteActions = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  SELECT: 13,
  BACK: 8,
  REWIND: 227,
  PLAY_PAUSE: 179,
  FAST_FORWARD: 228
};

class PlayerView extends Component {
  constructor(props) {
    super(props);
    debugger;
    // this.videoRef = React.createRef();
    // this.seekBarRef = React.createRef();
    this.playPauseVideo = this.playPauseVideo.bind(this);
  }
  componentDidMount() {
    const that = this;
    window.addEventListener("keyup", e => {
      console.log(e);
      if (e.keyCode === remoteActions.SELECT) {
        that.playPauseVideo();
      } else if (e.keyCode === remoteActions.REWIND) {
        that.decreaseSeekBarByTenSeconds();
      } else if (e.keyCode === remoteActions.FAST_FORWARD) {
        that.increaseSeekBarByTenSeconds();
      } else if (e.keyCode === remoteActions.LEFT) {
        that.decreaseSeekBarByTenSeconds();
      } else if (e.keyCode === remoteActions.RIGHT) {
        that.increaseSeekBarByTenSeconds();
      } else if (e.keyCode === remoteActions.PLAY_PAUSE) {
        that.playPauseVideo();
      }
    });
    if (this.props.live) {
      const video = document.getElementById("liveVideo");
      addLiveStreamSupport(video);
    }
  }

  componentWillUnmount() {
    if (this.props.live) {
      const video = document.getElementById("liveVideo");
      removeLoadMetadataEventListner(video);
    }
  }

  playPauseVideo = () => {
    if (this.videoRef.paused) {
      this.videoRef.play();
      this.videoRef.innerHTML = "Pause";
    } else {
      this.videoRef.pause();
      this.videoRef.innerHTML = "Play";
    }
  };

  increaseSeekBarByTenSeconds = () => {
    const videoRef = this.videoRef;
    const seekBarRef = this.seekBarRef;
    debugger;
    const time = videoRef.duration * (seekBarRef.value / 100);
    videoRef.currentTime = time + 10;
  };

  decreaseSeekBarByTenSeconds = () => {
    const videoRef = this.videoRef;
    const seekBarRef = this.seekBarRef;
    debugger;
    const time = videoRef.duration * (seekBarRef.value / 100);
    videoRef.currentTime = time - 10;
  };

  handleSeekbarChange = seekBar => {
    debugger;
    console.log(seekBar);
    const videoRef = this.videoRef;
    debugger;
    const time = videoRef.duration * (seekBar.target.value / 100);
    videoRef.currentTime = time;
  };

  handleVideoTimeUpdate = () => {
    const videoRef = this.videoRef;
    const seekBarRef = this.seekBarRef;
    const value = (100 / videoRef.duration) * videoRef.currentTime;
    seekBarRef.value = value;
  };

  handleMouseDown = () => {
    const videoRef = this.videoRef;
    videoRef.pause();
  };

  handleMouseUp = () => {
    const videoRef = this.videoRef;
    videoRef.play();
  };

  render(props) {
    console.log(this.seekBarRef);
    const { src } = props;
    if (this.seekBarRef) {
      console.log(this.seekBarRef.value);
    }
    console.log(src);
    return (
      <div>
        {!props.live ? (
          <video
            onKeyUp={e => {
              console.log(e);
            }}
            onTimeUpdate={this.handleVideoTimeUpdate}
            id="custom_video"
            //   controls="controls"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              zIndex: 9
            }}
            ref={videoRef => (this.videoRef = videoRef)}
            // src={require("./sample_video.mp4")}
            // src={src}
            // src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
            //   autoPlay
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <video
            onKeyUp={e => {
              console.log(e);
            }}
            onTimeUpdate={this.handleVideoTimeUpdate}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              zIndex: 9
            }}
            ref={videoRef => (this.videoRef = videoRef)}
            id="liveVideo"
          />
        )}
        <div id="vide_controls_bar" className={styles.video_controls}>
          <button
            style={{ width: "10vw", color: "white" }}
            id="playpausebtn"
            onClick={this.playPauseVideo}
          >
            Pause
          </button>
          <button style={{ width: "90vw", padding: "1rem" }}>
            <input
              style={{ width: "100%" }}
              ref={seekBarRef => (this.seekBarRef = seekBarRef)}
              onChange={this.handleSeekbarChange}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              type="range"
              id="seek-bar"
              value="0"
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  src: state.videoState.videoData.src
});

const mapDispatchToProps = dispatch => {
  return {
    setVideoPlayerData: videoData => dispatch(setVideoPlayerData(videoData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerView);
