import { h, Component } from "preact";
import style from "./style.scss";
import ShovelerView from "../../components/shovelerView/shovelerView";
import { mockItems } from "../../constants/applicationConstants";
import { animateTo } from "../../utils/windowsUtility";
class Home extends Component {
  scrollToTop = e => {
    const { parentElement } = e.currentTarget;
    const { offsetTop } = e.currentTarget;
    animateTo(
      parentElement,
      "scrollTop",
      "",
      parentElement.scrollTop,
      offsetTop - 200,
      300,
      true
    );
  };

  render() {
    return (
      <div style={{ height: "calc(100vh - 6rem)", overflow: "auto" }}>
        <button
          onFocusCapture={this.scrollToTop}
          //   style={{ position: "relative" }}
        >
          {/* <div
            style={{
              position: "absolute",
              width: "400px",
              height: "216px",
              border: "3px solid white",
              zIndex: "1",
              top: "67px",
              left: "62px"
            }}
          /> */}
          <ShovelerView
            live={true}
            Key="one"
            rowNumber={1}
            colNumber={0}
            play={false}
            items={mockItems}
          />
        </button>
        <button onFocusCapture={this.scrollToTop}>
          <ShovelerView
            live={true}
            Key="two"
            rowNumber={1}
            colNumber={0}
            play={false}
            items={mockItems}
          />
        </button>
        <button onFocusCapture={this.scrollToTop}>
          <ShovelerView
            live={true}
            Key="three"
            rowNumber={1}
            colNumber={0}
            play={false}
            items={mockItems}
          />
        </button>
        <button onFocusCapture={this.scrollToTop}>
          <ShovelerView
            live={true}
            Key="four"
            rowNumber={1}
            colNumber={0}
            play={false}
            items={mockItems}
          />
        </button>
      </div>
    );
  }
}

export default Home;
