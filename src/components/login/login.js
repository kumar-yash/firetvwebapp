import { Component } from "preact";
import styles from "./login.scss";

class Login extends Component {
  render(props) {
    return (
      <div class={styles.loginPageWrapper}>
        <div>Login page</div>
        <div>Enter the following code on url https://cure.fit/firetvlogin</div>
        <div>JK4ER</div>
      </div>
    );
  }
}

export default Login;
