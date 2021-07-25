import {Router, Route, Redirect, Switch } from 'react-router-dom';
import pathConts from './constants/pathConts';
import React from 'react';
// import Login from  './features/AuthForm/RegisterContainer';
import { history } from  './utils/navigation-utils';
import MainLayout from  './layout/MainLayout';
import pageSnipper from './components/PageSpinner';
import './styles/reduction.scss';


const Register = React.lazy(() => import('./features/AuthForm/RegisterContainer'));
const Dashboard = React.lazy(() => import('./features/Dashboard/DashboardContainer'));
const Login = React.lazy(() => import('./features/AuthForm/LoginContainer'));


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
      }}
    />
  );
};
function App(props) {
  return (
    
    <Router basename={() => getBasename()} history={history} >
      <Switch>
        {/* <Route
          path={pathConts.LOGIN}
          Component={Login}
          render={(props) => {
              return <Redirect to="/login" />;
          }}
        /> */}

        <MainLayout>
          <React.Suspense fallback={<pageSnipper />} > 
             <Switch>
              <PrivateRoute exact path={pathConts.DASHBOARD} component={Dashboard} />
              <PrivateRoute exact path={pathConts.REGISTER} component={Register} />
              <PrivateRoute exact path={pathConts.LOGIN} component={Login} />
            </Switch>
           </React.Suspense> 
        </MainLayout>
      </Switch>
    </Router>

  );
};


export default App;
