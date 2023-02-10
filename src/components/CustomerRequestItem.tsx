import React from "react";
import { Feed } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleCustomerRequest } from '../redux/reducers/issuesReducers';
import { getEmployees } from '../redux/selectors/employeeSelectors';
import Strings from '../services/strings';

interface Props {
    customerRequest: CustomerRequest
}

const CustomerRequestItem: React.FC<Props> = ({ customerRequest }) => {
    const dispatch = useAppDispatch();

    const employees = useAppSelector(getEmployees);
    
    let employee = employees.filter(({email}) => email === customerRequest.assignee)[0] || {};
    const {name, thumbnail} = employee;

    const toggleRequest = () => {
        dispatch(toggleCustomerRequest(customerRequest))
    }

    const stringArgs = {
      assignee: name,
      assignedDate: new Date(customerRequest.assignedDate).toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: '2-digit' })
    }
    return (
        <Feed.Event>
          <label>                
            <Feed.Extra text className={customerRequest.complete ? 'fulfilled' : ''}>
              <div className="request-item">
                <input
                  type='checkbox'
                  onClick={toggleRequest}
                  defaultChecked={customerRequest.complete}
                />
                <span>{` ${customerRequest.customerRequestDescription}`}</span>
              </div>
              <Feed.Date>{Strings.str('ticketOwnerAndDate', stringArgs)}</Feed.Date>
            </Feed.Extra>
          </label>
          <Feed.Label image={thumbnail} />
        </Feed.Event>
    );
}

export default CustomerRequestItem;