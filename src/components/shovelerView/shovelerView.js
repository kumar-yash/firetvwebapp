import { h, Component } from "preact";
import { liveStreamMockUrl } from "../../constants/applicationConstants";
import PlayerView from "../playerView/playerView";
import styles from "./shovelerView.scss";
import { route } from "preact-router";
import { setVideoPlayerData } from "../../actions/videoActions";
import { connect } from "preact-redux";
import { animateTo } from "../../utils/windowsUtility";

// const videoImg = require("../../l11.jpg");

class ShovelerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false,
      scrollRight: false
    };
  }

  componentDidMount() {
    // window.addEventListener("keyup", e => {
    //   if (e.keyCode === 37) {
    //     var leftPos = $(".video_container_scroll").scrollLeft();
    //     $(".video_container_scroll").animate(
    //       {
    //         scrollLeft: leftPos - 1000
    //       },
    //       800
    //     );
    //   } else if (e.keyCode === 39) {
    //     var leftPos = $(".video_container_scroll").scrollLeft();
    //     $(".video_container_scroll").animate(
    //       {
    //         scrollLeft: leftPos + 1000
    //       },
    //       800
    //     );
    //   }
    // });
  }

  //   vwToPx(value) {
  //     const w = window,
  //       d = document,
  //       e = d.documentElement,
  //       g = d.getElementsByTagName("body")[0],
  //       x = w.innerWidth || e.clientWidth || g.clientWidth,
  //       y = w.innerHeight || e.clientHeight || g.clientHeight;
  //     return (x * value) / 100;
  //   }

  //   scrollToRight = () => {
  //     const leftPos = $(`div[Key="${this.props.Key}"]`).scrollLeft();
  //     $(`div[Key="${this.props.Key}"]`).animate(
  //       {
  //         scrollLeft: leftPos + 380
  //       },
  //       300
  //     );
  //   };

  //   scrollToLeft = () => {
  //     const leftPos = $(`div[Key="${this.props.Key}"]`).scrollLeft();
  //     console.log(leftPos);
  //     $(`div[Key="${this.props.Key}"]`).animate(
  //       {
  //         scrollLeft: leftPos - 380
  //       },
  //       300
  //     );
  //   };

  //   scrollToDown = () => {
  //     const topPos = $(`div[Key="${this.props.Key}"]`).scrollTop();
  //     console.log(topPos, $(`div[Key="${this.props.Key}"]`));
  //     $(`div[Key="${this.props.Key}"]`).animate(
  //       {
  //         scrollTop: topPos + 700
  //       },
  //       300
  //     );
  //   };

  //   scrollToUp = () => {
  //     const topPos = $(`div[Key="${this.props.Key}"]`).scrollTop();
  //     console.log(topPos, $(`div[Key="${this.props.Key}"]`));
  //     $(`div[Key="${this.props.Key}"]`).animate(
  //       {
  //         scrollTop: topPos - 700
  //       },
  //       300
  //     );
  //   };

  //   animateTo = (elem, style, unit, from, to, time, prop) => {
  //     if (!elem) {
  //       return;
  //     }
  //     const start = new Date().getTime(),
  //       timer = setInterval(() => {
  //         const step = Math.min(1, (new Date().getTime() - start) / time);
  //         if (prop) {
  //           elem[style] = from + step * (to - from) + unit;
  //         } else {
  //           elem.style[style] = from + step * (to - from) + unit;
  //         }
  //         if (step === 1) {
  //           clearInterval(timer);
  //         }
  //       }, 25);
  //     if (prop) {
  //       elem[style] = from + unit;
  //     } else {
  //       elem.style[style] = from + unit;
  //     }
  //   };

  scrollCarousel = e => {
    const { parentElement } = e.currentTarget;
    const { offsetLeft, offsetTop } = e.target;
    console.log(e, offsetTop);
    animateTo(
      parentElement,
      "scrollLeft",
      "",
      parentElement.scrollLeft,
      offsetLeft - 200,
      300,
      true
    );

    // $(parentElement).animate(
    //   {
    //     scrollLeft: offsetLeft - 100
    //     // scrollTop: offsetTop - 100
    //   },
    //   300
    // );
  };

  handleButtonFocus = (e, item) => {
    this.scrollCarousel(e);
  };

  handleOnKeyUp = (e, item) => {
    if (e.keyCode === 39) {
      this.scrollCarousel(e);
    } else if (e.keyCode === 37) {
      this.scrollCarousel(e);
    } else if (e.keyCode === 38) {
      //   this.scrollToUp();
    } else if (e.keyCode === 40) {
      //   this.scrollToDown();
    }
  };

  render(props) {
    const {
      rowNumber,
      colNumber,
      play,
      items,
      live,
      setVideoPlayerData
    } = props;
    const { playVideo } = this.state;
    console.log(props);

    return (
      <div
        className={styles.video_container_scroll}
        style={{
          display: "inline-flex",
          flexDirection: "row",
          maxWidth: "100vw",
          //   height: "30vh",
          overflowX: "scroll",
          //   overflowX: "visible",
          paddingLeft: "3rem",

          marginTop: "1rem",
          height: "20rem",
          overflowY: "hidden"

          //   position: "relative"
        }}
      >
        {/* <div
            style={{
              position: "absolute",
              width: "400px",
              height: "216px",
              border: "3px solid white",
              zIndex: "1",
              top: "52px",
              left: "55px"
            }}
          /> */}
        {/* <div className={styles.row_inner} style={{ display: "inherit" }}> */}
        {items.map((item, state, context) => (
          <button
            className={styles.buttonImage}
            onFocus={e => this.handleButtonFocus(e, item)}
            onKeyUp={e => this.handleOnKeyUp(e, item)}
            // onClick={e => {
            //   //   setVideoPlayerData({ src: liveStreamMockUrl });
            //   setVideoPlayerData({
            //     src:
            //       "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            //   });

            //   //   route("/videoplayer");
            //   //   this.setState({ playVideo: true, src: liveStreamMockUrl });
            // }}
          >
            <img
              className={styles.imageClass}
              src={
                item.src ||
                "https://res.cloudinary.com/www-curefit-com/image/upload/w_150,ar_1.85,fl_progressive,f_auto,q_auto/dpr_2/v1/cult-media/v2web/workouts/22_id/D_CLP_2019-04-02T12:55:54.538Z.png"
              }
              alt="logo"
            />
          </button>
        ))}
        {/* </div> */}
        {/* {playVideo && route("/videoplayer", true)} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videoState: state.videoState
});

const mapDispatchToProps = dispatch => {
  return {
    setVideoPlayerData: videoData => dispatch(setVideoPlayerData(videoData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShovelerView);

// export default ShovelerView;
