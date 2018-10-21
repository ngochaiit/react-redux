//step 3: combine all reduce
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers(
    {
        users: UserReducer,
        activeUser: ActiveUserReducer,
    }
)
export default allReducers;