import { createSelector } from 'reselect';

export const getEmployeesState = state => state.employees;

export const getEmployees = createSelector(
  [getEmployeesState],
  employeeState => employeeState ? employeeState.employees : []
)





