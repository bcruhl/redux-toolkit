import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { compareObjects } from '../../services/utils';

export interface EmployeeState {
	loaded: boolean;
  employees: Employee[];
}

const localizeName = ({first, last}) => {
	return `${first} ${last}`;
}

export const downloadEmployees = createAsyncThunk('employees/downloadEmployees', async () => {
  const res = await fetch('https://randomuser.me/api?results=5&seed=axle-team&inc=name,picture,email').then(
    (data) => data.json()
  )

  let employees: Employee[] = [];
  res.results.map(({name, email, picture}) => {
  	employees.push({
  		name: localizeName(name),
  		email: email,
  		thumbnail: picture.thumbnail
  	})
  })
  return employees;
});

const initialState: EmployeeState = {
	loaded: false,
  employees: [],
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  //   defineStaff: (state, action: PayloadAction<Employee[]>) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.employees = action.payload;
  //     state.loaded = true;
  //   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(downloadEmployees.pending, (state) => {
        state.loaded = false;
      })
      .addCase(downloadEmployees.fulfilled, (state, {payload}) => {
        state.loaded = true;
        state.employees = payload;
      })
      .addCase(downloadEmployees.rejected, (state) => {
        state.loaded = false;
      });
  },
});

//export const { defineStaff } = employeesSlice.actions;

// // The function below is our selector and allows us to select our issues
// // the state. 
export const isStaffLoaded = (state: RootState) => state.employees.loaded;

export default employeesSlice.reducer;
