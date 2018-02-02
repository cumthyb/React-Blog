import { combineReducers } from "redux"
import reducer_sider from "./sider.jsx"
import reducer_turnpage from "./turnpage.jsx"
import reducer_login from "./login.jsx"

const reducers = combineReducers({
    reducer_sider,
    reducer_turnpage,
    reducer_login
});

export default reducers;