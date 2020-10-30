import React from "react";
import routes from "./routes";
import NoMatch from "./components/noMatch/NoMatch";
import LoadingBar from "react-top-loading-bar";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "./components/navBar/NavBar";

type Props = {
  loader: { color: string; progress: number };
};

const App: React.FC<Props> = ({ loader }): JSX.Element => {
  return (
    <>
      <LoadingBar color={loader.color} progress={loader.progress} />
      <Switch>
        {routes.map(({ path, exact, noNavBar, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => (
              <>
                {!noNavBar && (
                  <NavBar />
                )}
                <C {...props} {...rest} />
              </>
            )}
          />
        ))}
        <Route render={(props) => <NoMatch {...props} />} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};

export default connect(mapStateToProps)(App);
