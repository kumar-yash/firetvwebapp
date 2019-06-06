import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style.scss";
import { connect } from "preact-redux";
import { watchPersonData } from "./headerActionCreator";

class Header extends Component {
  componentDidMount() {
    this.props.watchPersonData();
  }
  render(props) {
    console.log(props);
    return (
      <header class={style.header}>
        <nav>
          <Link activeClassName={style.active} href="/">
            Cult
          </Link>
          <Link activeClassName={style.active} href="/profile">
            Mind
          </Link>
          <Link activeClassName={style.active} href="/login">
            Login
          </Link>
          {/* <Link activeClassName={style.active} href="/profile/john">
            John
          </Link> */}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  personData: state.homeState.personData
});

const mapDispatchToProps = dispatch => {
  return {
    watchPersonData: () => dispatch(watchPersonData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
