import React from 'react';
import { Feed } from 'semantic-ui-react';
import { useAppSelector } from '../redux/hooks';
import CustomerRequestItem from './CustomerRequestItem';
import '../static/css/request.css';

interface Props {}

const CustomerRequestList: React.FC<Props> = () => {
    const customerRequests = useAppSelector(state => state.issues ? state.issues.issues : []);

    return (
        <Feed>
            {customerRequests.map((customerRequest) => (
                <CustomerRequestItem key={customerRequest.customerRequestDescription} customerRequest={customerRequest} />
            ))}
        </Feed>
    )
}

export default CustomerRequestList;