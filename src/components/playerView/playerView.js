import { h, Component } from "preact";
import {
  addLiveStreamSupport,
  removeLoadMetadataEventListner
} from "../../utils/liveStreamUtil";
// const videoUrl = require("./sample_video.mp4");
import styles from "./playerView.scss";
import { connect } from "preact-redux";
import linkRef from "linkref";

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
    // this.videoRef = React.createRef();
    // this.seekBarRef = React.createRef();
    this.playPauseVideo = this.playPauseVideo.bind(this);
  }
  componentDidMount() {
    console.log("mounted");
    this.refs.videoRef.currentTime = 0;
    this.refs.seekBarRef.value = 0;
    window.addEventListener("keyup", e => {
      this.handleVideoKeyEvents(e);
    });
    if (this.props.live) {
      const video = document.getElementById("liveVideo");
      addLiveStreamSupport(video);
    }
  }

  componentDidUpdate(props) {
    console.log("dsagfsfgsdfg", this.props, props);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", e => {
      this.handleVideoKeyEvents(e);
    });
  }
  handleVideoKeyEvents = e => {
    console.log("asdfasdfsdf", e);
    if (e.keyCode === remoteActions.SELECT) {
      this.playPauseVideo();
    } else if (e.keyCode === remoteActions.REWIND) {
      this.decreaseSeekBarByTenSeconds();
    } else if (e.keyCode === remoteActions.FAST_FORWARD) {
      this.increaseSeekBarByTenSeconds();
    } else if (e.keyCode === remoteActions.LEFT) {
      this.decreaseSeekBarByTenSeconds();
    } else if (e.keyCode === remoteActions.RIGHT) {
      this.increaseSeekBarByTenSeconds();
    } else if (e.keyCode === remoteActions.PLAY_PAUSE) {
      this.playPauseVideo();
    }
  };

  handleKeyUp = e => {
    console.log("slgjnasflgnajsfng", e);
    if (
      e.keyCode === remoteActions.SELECT ||
      e.keyCode === remoteActions.PLAY_PAUSE
    ) {
      this.playPauseVideo();
    }
  };

  playPauseVideo = () => {
    if (this.refs.videoRef.paused) {
      this.refs.videoRef.play();
      this.refs.videoRef.innerHTML = "Pause";
    } else {
      this.refs.videoRef.pause();
      this.refs.videoRef.innerHTML = "Play";
    }
  };

  increaseSeekBarByTenSeconds = () => {
    const videoRef = this.refs.videoRef;
    const seekBarRef = this.refs.seekBarRef;
    const time = videoRef.duration * (seekBarRef.value / 100);
    videoRef.currentTime = time + 10;
  };

  decreaseSeekBarByTenSeconds = () => {
    const videoRef = this.refs.videoRef;
    const seekBarRef = this.refs.seekBarRef;
    const time = videoRef.duration * (seekBarRef.value / 100);
    videoRef.currentTime = time - 10;
  };

  handleSeekbarChange = seekBar => {
    console.log(seekBar, seekBar.target.value);
    const videoRef = this.refs.videoRef;
    const time = videoRef.duration * (seekBar.target.value / 100);
    videoRef.currentTime = time;
  };

  handleVideoTimeUpdate = () => {
    const videoRef = this.refs.videoRef;
    const seekBarRef = this.refs.seekBarRef;
    const value = (100 / videoRef.duration) * videoRef.currentTime;
    seekBarRef.value = value;
  };

  handleMouseDown = () => {
    const videoRef = this.refs.videoRef;
    videoRef.pause();
  };

  handleMouseUp = () => {
    const videoRef = this.refs.videoRef;
    videoRef.play();
  };

  render(props) {
    // console.log(this.refs.seekBarRef);
    const { src } = props;
    if (this.refs && this.refs.seekBarRef) {
      console.log(this.refs.seekBarRef.value);
    }
    console.log(src);
    return (
      <div>
        {!props.live ? (
          <video
            key="wert"
            onKeyDown={this.handleKeyUp}
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
            // ref={videoRef => (this.videoRef = videoRef)}
            ref={linkRef(this, "videoRef")}
            // src={require("./sample_video.mp4")}
            // src={src}
            // src="https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8"
            //   autoPlay
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <video
            key="sg"
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
            ref={linkRef(this, "videoRef")}
            // ref={videoRef => (this.videoRef = videoRef)}
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
              ref={linkRef(this, "seekBarRef")}
              onChange={this.handleSeekbarChange}
              onInput={this.handleSeekbarChange}
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
