import React, { useState } from "react";
import { TextArea, Form, Button, Label } from "semantic-ui-react";
import { appendRequest } from "../redux/reducers/issuesReducers";
import { useAppDispatch } from '../redux/hooks';
import Strings from '../services/strings';

interface Props {}

const AddCustomerRequestForm: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const [requestDescription, setRequestDescription] = useState("");

    const addRequest = (e) => {
        e.preventDefault();
        dispatch(appendRequest(requestDescription));
        setRequestDescription("");
    }

    const captureTextEntry = (e) => setRequestDescription(e.target.value);
    
    return (
        <Form>
            <Form.Field>
                <TextArea placeholder={Strings.str('addRequestPlaceholder')} onChange={captureTextEntry} value={requestDescription}/>
                <Button primary onClick={addRequest}>{Strings.str('buttonSubmit')}</Button>
            </Form.Field>
        </Form>
    )
}

export default AddCustomerRequestForm;

