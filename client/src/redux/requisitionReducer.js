const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';

const initialState = {
    requisitions: [{
        id: null,
        companyName: '',
        FullName: '',
        contactPhone: null,
        comment: '',
        ati: null,
        time: null,
    }]
}


export const requisitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_REQUISITION:
            return {
                ...state,
                requistions: action.payload
            };
        case GET_ALL_REQUISITION:
            console.log(action.payload)
            return {
                ...state,
                requisitions: action.payload

            }
        default:
            return state;
    }
}