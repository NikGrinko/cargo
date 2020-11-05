
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION'

const initialState = {
    requistions: [{
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
            }
        default:
            return state;
    }
}