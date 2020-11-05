import { api } from '../../api/api';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';


export const addRequisition = (data) => (dispatch) => {
    console.log("actionCreaterr")
    api.addRequistion(data)
        .then((res) => {
            dispatch({
                type: ADD_NEW_REQUISITION,
                payload: res
            })
        })
}
