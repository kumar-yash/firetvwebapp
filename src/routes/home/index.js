import { h, Component } from "preact";
import style from "./style.scss";
import ShovelerView from "../../components/shovelerView/shovelerView";
import { mockItems } from "../../constants/applicationConstants";
import { animateTo } from "../../utils/windowsUtility";
import BannerWidget from "../../common/banner/banner";
class Home extends Component {
  state = {
    src: ""
  };

  scrollToTop = e => {
    console.log(e.target.dataset.src);
    let src = e.target.dataset.src;
    this.setState({
      src
    });
    const { parentElement } = e.currentTarget;
    const { offsetTop } = e.currentTarget;
    console.log(offsetTop, parentElement.scrollTop);
    animateTo(
      parentElement,
      "scrollTop",
      "",
      parentElement.scrollTop,
      offsetTop - 550,
      300,
      true
    );
  };

  render(props, { src }) {
    return (
      <div>
        <BannerWidget src={src} />
        <div style={{ height: "calc(100vh - 440px)", overflow: "auto" }}>
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
      </div>
    );
  }
}

export default Home;
