import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {blogReducer} from "../reducers/blogsReducer";
import {useDispatch} from "react-redux";
import {postsReducer} from "../reducers/postsReducer";


const rootReducers = combineReducers({blogs: blogReducer, posts: postsReducer})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const AppDispatch = () => useDispatch<AppDispatchType>()