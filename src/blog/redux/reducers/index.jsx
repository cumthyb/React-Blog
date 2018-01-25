import {combineReducers} from "redux"
import reducer_sider from "./sider.jsx" 
import reducer_turnpage from "./turnpage.jsx"

const reducers=combineReducers({reducer_sider,reducer_turnpage});

export default reducers;