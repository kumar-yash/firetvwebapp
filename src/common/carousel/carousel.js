import { h, Component } from "preact";

class Carousel extends Component {
  render(props, state) {
    const items = [
      {
        src:
          "https://res.cloudinary.com/www-curefit-com/image/upload/w_1920,f_auto,ar_2880:595,q_auto:eco/dpr_2/image/vm/10373882-a1b4-4c0f-b997-d440acadb198.jpg"
      },
      {
        src:
          "https://res.cloudinary.com/www-curefit-com/image/upload/w_1920,f_auto,ar_2880:595,q_auto:eco/dpr_2/image/vm/10373882-a1b4-4c0f-b997-d440acadb198.jpg"
      },
      {
        src:
          "https://res.cloudinary.com/www-curefit-com/image/upload/w_1920,f_auto,ar_2880:595,q_auto:eco/dpr_2/image/vm/10373882-a1b4-4c0f-b997-d440acadb198.jpg"
      }
    ];
    return (
      <div>
        <img
          src="https://res.cloudinary.com/www-curefit-com/image/upload/w_1920,f_auto,ar_2880:595,q_auto:eco/dpr_2/image/vm/10373882-a1b4-4c0f-b997-d440acadb198.jpg"
          alt="banner_image"
          style={{ width: "100%" }}
        />
      </div>
    );
  }
}

export default Carousel;
