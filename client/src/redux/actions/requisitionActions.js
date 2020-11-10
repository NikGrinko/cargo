import { api } from '../../api/api';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';
const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';

export const addRequisition = (data) => (dispatch) => {
    api.addRequistion(data)
        .then((res) => {
            dispatch(getAllRequisition());
        })

}
export const getAllRequisition = () => (dispatch) => {
    api.getAllRequistion()
        .then((res) => {
            dispatch({
                type: GET_ALL_REQUISITION,
                payload: res.data.allRequisition
            })
        })
}