import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {blogReducer, BlogsReducerAT} from "../reducers/blogsReducer";
import {useDispatch} from "react-redux";
import {PostsActionType, postsReducer} from "../reducers/postsReducer";
import {AppActionType, appReducer} from "../reducers/appReducer";


const rootReducers = combineReducers({blogs: blogReducer, posts: postsReducer, app: appReducer})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

export type AppRootActionType = BlogsReducerAT | AppActionType | PostsActionType

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AppRootActionType>
export const AppDispatch = () => useDispatch<AppDispatchType>()