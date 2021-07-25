import { combineReducers } from 'redux';
import DashboardReducer from  '../features/Dashboard/DashboardSlice';
import RegisterReducer from '../features/AuthForm/RegisterSlice';

export default combineReducers({
    dashboard: DashboardReducer,
    register: RegisterReducer,
})