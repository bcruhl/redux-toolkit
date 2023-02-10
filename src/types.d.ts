interface CustomerRequest {
    customerRequestDescription: string;
    complete: boolean;
    assignee: string;
    assignedDate: string;
}

interface Employee {
    name: string,
    email: string,
    thumbnail: string,
}

type ToggleCustomerRequest = (selectedRequest: CustomerRequest) => void;
type AddCustomerRequest = (text: string) => void;