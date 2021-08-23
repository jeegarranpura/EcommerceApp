import React from "react";
import PageSpinner from "./components/PageSpinner";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import pathConts from "./constants/pathConts";
import Login from "./features/AuthForm/LoginContainer";
import { isUserAuthenticated } from "./utils/auth-utils";
import { history } from "./utils/navigation-utils";
import MainLayout from "./layout/MainLayout";
import Logincomponent from "./components/AuthForm/Login";
import RegisterComponant from "./components/AuthForm/Register";
import Register from './features/AuthForm/RegisterContainer';
import "./styles/reduction.scss";


// const Register = React.lazy(() =>
//   import("./features/AuthForm/RegisterContainer")
// );
const Dashboard = React.lazy(() =>
  import("./features/Dashboard/DashboardContainer")
);

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserAuthenticated()) {
          return <Component {...props} />;
        } else if(window.location.pathname === pathConts.REGISTER){
          // <Redirect
          //   to={pathConts.REGISTER}
          //   Component={RegisterComponant}
          //   {...props}
          // />;
          window.location.href = pathConts.REGISTER;
          
        }else {
          window.location.href = pathConts.LOGIN;
        }
        // window.location.href = pathConts.LOGIN;
      }}
    />
  );
};
function App(props) {
  return (
    <Router basename={() => getBasename()} history={history}>
      <Switch>
        <Route
          path={window.location.pathname === pathConts.REGISTER ? pathConts.REGISTER : pathConts.LOGIN}
          Component={ window.location.pathname === pathConts.REGISTER ? RegisterComponant : Logincomponent}
          render={(props) => {
            if (isUserAuthenticated()) {
              return <Redirect to="/" />;
            } else if(window.location.pathname === pathConts.REGISTER) {
              return <Register {...props }/>
            }else {
              return <Login {...props} />;
            }
            // return <Redirect to="/login" />;
          }}
        />

        <MainLayout>
          <React.Suspense fallback={<PageSpinner />}>
            <Switch>
              <PrivateRoute
                exact
                path={pathConts.DASHBOARD}
                component={Dashboard}
              />
            </Switch>
          </React.Suspense>
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
