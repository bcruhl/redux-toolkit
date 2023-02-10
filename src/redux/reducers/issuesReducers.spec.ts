import issuesReducer, {
  IssuesState,
  appendRequest,
  toggleCustomerRequest,
} from './issuesReducers';

describe('request issue reducer', () => {
  const initialState: IssuesState = {
    issues: [],
  };

  const mockPopulatedState: IssuesState = {
    issues: [
      {
        "customerRequestDescription": "Increase Shawn\"s Trucking Credit Limit to $50,000",
        "complete": false,
        "assignee": "mny.hydry@example.com",
        "assignedDate": "Tue Sep 06 2022 14:55:47 GMT-0500 (Central Daylight Time)"
      },
      {
        "customerRequestDescription": "Change email address for primary contact on Sean\"s Carrier Service",
        "complete": true,
        "assignee": "gerald.marchand@example.com",
        "assignedDate": "Tue Sep 06 2022 14:55:47 GMT-0500 (Central Daylight Time)"
      }
    ],
  };

  // TODO: When we remove the the dummy state from initialState, this test will hold true for the uninitialized reducer
  // it('should handle initial state', () => {
  //   expect(issuesReducer(undefined, { type: 'unknown' })).toEqual({
  //     issues: []
  //   });
  // });

  it('should handle adding requests', () => {
    const actual = issuesReducer(initialState, appendRequest("First Request"));
    expect(actual.issues.length).toEqual(1);
  });

  it('should put added requests at the top of the list', () => {
    const actual = issuesReducer(mockPopulatedState, appendRequest("Second Request"));
    expect(actual.issues.length).toEqual(3);
    expect(actual.issues[0].customerRequestDescription).toEqual("Second Request");
  });

  it('should change the state of a request to complete', () => {
    const actual = issuesReducer(mockPopulatedState, toggleCustomerRequest(mockPopulatedState[0]));
    expect(actual.issues[0].complete).toEqual(false);
  });

  it('should change the state of a request to incomplete', () => {
    const actual = issuesReducer(mockPopulatedState, toggleCustomerRequest(mockPopulatedState[1]));
    expect(actual.issues[1].complete).toEqual(true);
  });
});
