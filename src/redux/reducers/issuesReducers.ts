import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import { assignTeamMember, compareObjects } from '../../services/utils';

export interface IssuesState {
  issues: CustomerRequest[];
}

export const createTicket = (text: string):CustomerRequest => {
  return {
    customerRequestDescription: text,
    complete: false,
    assignee: assignTeamMember(),
    assignedDate: String(new Date()),
  }
}

const initialState: IssuesState = {
  issues: [
    createTicket("Increase Shawn's Trucking Credit Limit to $50,000"),
    createTicket("Change email address for primary contact on Sean's Carrier Service")
  ],
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    appendRequest: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.issues.unshift(createTicket(action.payload));
    },
    toggleCustomerRequest: (state, action: PayloadAction<CustomerRequest>) => {
      const issues = [...state.issues];
      state.issues = issues.map((customerRequest) => {
        if (compareObjects(customerRequest, action.payload)) {
          //change the objects complete status
          return {
            ...customerRequest,
            complete: !customerRequest.complete
          }
        }
        return customerRequest;
      });
    }
  }
});

export const { appendRequest, toggleCustomerRequest } = issuesSlice.actions;

// // The function below is our selector and allows us to select our issues
// // the state. 
// export const selectCount = (state: RootState) => state.counter.value;

export default issuesSlice.reducer;
