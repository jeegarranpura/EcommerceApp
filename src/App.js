import React from 'react';
import PageSpinner from './components/PageSpinner';
import {Router, Route, Redirect, Switch } from 'react-router-dom';
import pathConts from './constants/pathConts';
import Login from  './features/AuthForm/LoginContainer';
import { history } from  './utils/navigation-utils';
import MainLayout from  './layout/MainLayout';
import Logincomponent from './components/AuthForm/Login';
import './styles/reduction.scss';


const Register = React.lazy(() => import('./features/AuthForm/RegisterContainer'));
const Dashboard = React.lazy(() => import('./features/Dashboard/DashboardContainer'));



const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
          return <Component {...props} />;
          // window.location.href = pathConts.DASHBOARD;
          // <Redirect to={pathConts.LOGIN} Component={Logincomponent} {...props}/>
      }}
    />
  );
};
function App(props) {
  return (
    <Router basename={() => getBasename()} history={history} >
      <Switch>
        <Route
          path={pathConts.LOGIN}
          Component={Logincomponent}
          render={(props) => {
              // return <Redirect to="/login" />;
              return <Login {...props} />
          }}
        />

        <MainLayout>
          <React.Suspense fallback={<PageSpinner />} > 
             <Switch>
              <PrivateRoute exact path={pathConts.DASHBOARD} component={Dashboard} />
              <PrivateRoute exact path={pathConts.REGISTER} component={Register} />
            </Switch>
           </React.Suspense> 
        </MainLayout>
      </Switch>
    </Router>

  );
};


export default App;
