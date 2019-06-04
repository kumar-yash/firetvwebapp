import { h, Component } from "preact";
import style from "./style.scss";
import ShovelerView from "../../components/shovelerView/shovelerView";
import $ from "jquery";
import { mockItems } from "../../constants/applicationConstants";
class Home extends Component {
  scrollToTop = e => {
    const { parentElement } = e.currentTarget;
    const { offsetTop } = e.currentTarget;
    console.log(
      e.currentTarget,
      "offsetTop=",
      offsetTop,
      "scrollTop=",
      parentElement.scrollTop
    );
    $(parentElement).animate(
      {
        scrollTop: offsetTop - 100
      },
      300
    );
  };
  render() {
    return (
      <div style={{ height: "calc(100vh - 3rem)", overflow: "auto" }}>
        <button onFocusCapture={this.scrollToTop}>
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
