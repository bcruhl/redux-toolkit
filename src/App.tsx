import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { downloadEmployees, isStaffLoaded } from './redux/reducers/employeeReducers';
import AddCustomerRequestForm from './components/AddCustomerRequestForm';
import CustomerRequestList from './components/CustomerRequestList';
import './static/css/app.css';
import Strings from './services/strings';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Populate the users once mounted
    dispatch(downloadEmployees());
  }, [dispatch])
  
  const staffLoaded = useAppSelector(isStaffLoaded);

  return (
    <div className="request-container">
      <h1>{Strings.str('requestTrackingTitle')}</h1>
      {staffLoaded && <>
        <CustomerRequestList />
        <AddCustomerRequestForm />
      </>}
    </div>
  )
}

export default App;
