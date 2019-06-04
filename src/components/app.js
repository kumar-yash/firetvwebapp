import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "preact-redux";
import { store } from "../redux/app-redux";
import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Head from "preact-head";
import PlayerView from "../components/playerView/playerView";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  //   history = createMemoryHistory();

  //   getChildContext() {
  //     return { history: this.history };
  //   }

  handleRoute = e => {
    this.currentUrl = e.url;
    console.log(this.currentUrl, e);
  };

  render() {
    // console.log(createMemoryHistory);
    return (
      <div id="app" onKeyDown={e => console.log(e)}>
        <Provider store={store}>
          <Head>
            <link
              href="https://vjs.zencdn.net/7.5.4/video-js.css"
              rel="stylesheet"
            />
          </Head>
          <Header />

          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <PlayerView live={false} path="/videoplayer" />
            {/* <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" /> */}
          </Router>
        </Provider>
      </div>
    );
  }
}
