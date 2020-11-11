import { api } from '../../api/api';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';
const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const DELETE_REQUISITION = 'DELETE_REQUISITION';
export const addRequisition = (data) => (dispatch) => {
    api.addRequistion(data)
        .then((res) => {
            dispatch({
                type: ADD_NEW_REQUISITION,
                payload: res.data
            })
        })

}
export const getAllRequisition = () => (dispatch) => {
    api.getAllRequistion()
        .then((res) => {
            if (res != undefined) {
                dispatch({
                    type: GET_ALL_REQUISITION,
                    payload: res.data.allRequisition
                })
            }

        })
}
export const deleteRequisition = (id) => (dispatch) => {
    api.deleteRequistion(id)
        .then(res => {
            dispatch({
                type: DELETE_REQUISITION,
                payload: id
            })
        })
}