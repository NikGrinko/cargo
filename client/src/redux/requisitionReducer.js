const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';

const initialState = {
    requisitions: []
}


export const requisitionReducer = (state = initialState, action) => {
    switch (action.type) {
        //Бобавляем новую завку

        //Берем все заявки
        case GET_ALL_REQUISITION:
            console.log(action.payload);
            if (action.payload) {
                return {
                    ...state,
                    requisitions: action.payload

                }
            };
        default:
            return state;
    }
}