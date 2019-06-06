import { h, Component } from "preact";
import styles from "./banner.scss";
class BannerWidget extends Component {
  render(props, state) {
    console.log(styles);
    return (
      <div>
        <img
          className="faded"
          src={
            props.src ||
            "https://res.cloudinary.com/www-curefit-com/image/upload/w_1920,f_auto,ar_2880:595,q_auto:eco/dpr_2/image/vm/10373882-a1b4-4c0f-b997-d440acadb198.jpg"
          }
          alt="banner_image"
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default BannerWidget;
