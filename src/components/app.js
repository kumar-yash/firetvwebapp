import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "preact-redux";
import { store } from "../redux/app-redux";
import Header from "./header";
import { routes } from "../routesConfig";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */

  handleRoute = e => {
    this.currentUrl = e.url;
    console.log(this.currentUrl, e);
  };

  render() {
    return (
      <div id="app" onKeyDown={e => console.log(e)}>
        <Provider store={store}>
          <Header />
          <Router onChange={this.handleRoute}>
            {routes.map(route => (
              <route.Component
                key={route.key}
                path={route.path}
                {...route.props}
              />
            ))}
          </Router>
        </Provider>
      </div>
    );
  }
}
