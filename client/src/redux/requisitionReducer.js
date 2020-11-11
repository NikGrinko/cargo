const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';
const DELETE_REQUISITION = 'DELETE_REQUISITION';
const initialState = {
    requisitions: []
}


export const requisitionReducer = (state = initialState, action) => {
    switch (action.type) {
        //Удаляем заявку

        case DELETE_REQUISITION:
            return {
                ...state,
                requisitions: state.requisitions.filter((item) => item._id !== action.payload)
            }

        //Добавляем новую завку
        case ADD_NEW_REQUISITION:
            const newRequisitions = state.requisitions;
            newRequisitions.push(action.payload[0]);
            return {
                ...state,
                requisitions: newRequisitions
            }
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