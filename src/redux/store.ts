import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import issuesReducer from './reducers/issuesReducers';
import employeeReducer from './reducers/employeeReducers';

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
