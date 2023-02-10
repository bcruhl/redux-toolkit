import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mockData from './mockData.json';
import employeeReducer from '../redux/reducers/employeeReducers';
import issuesReducer from '../redux/reducers/issuesReducers';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  issues: issuesReducer,
  employees: employeeReducer
})

const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export function renderWithProviders(
  ui,
  {
    preloadedState = mockData,
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

