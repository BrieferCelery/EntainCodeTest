import {createStore, combineReducers, configureStore} from '@reduxjs/toolkit';
import racesReducer from './reducers/raceReducers';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {races: racesReducer},
});

// export const store = createStore(reducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;