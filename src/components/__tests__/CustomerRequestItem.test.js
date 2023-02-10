import React from 'react';
import CustomerRequestItem from '../CustomerRequestItem';
import {renderWithProviders} from '../../test/testStore'

// import thunk from "redux-thunk";
// import configureMockStore from "redux-mock-store";
// import promiseMiddleware from "redux-promise-middleware";

// const mockStore = configureMockStore([thunk, promiseMiddleware()]);

let wrapper;
let store;
let defaultProps = {
	customerRequestDescription: "Testing text",
    complete: false,
    assignee: "joe.smith@test.com",
    assignedDate: String(new Date())
}
beforeEach(() => {
    wrapper = renderWithProviders(<CustomerRequestItem customerRequest={defaultProps} />);
});
describe('<CustomerRequestItem /> rendering', () => {
    it('should render without crashing', function () {
		expect(wrapper.container.getElementsByClassName('event').length).toBe(1);
	}),
	it('should reflect strikethrough when completed', () => {
		wrapper = renderWithProviders(<CustomerRequestItem customerRequest={{ ...defaultProps, complete: true }} />);
		expect(wrapper.container.getElementsByClassName('fulfilled').length).toBe(1);
	})
});