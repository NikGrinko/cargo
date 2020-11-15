import { api } from '../../api/api';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';
const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const DELETE_REQUISITION = 'DELETE_REQUISITION';
const SET_OPEN_REQUISITION = 'SET_OPEN_REQUISITION';
const SET_LINK_TO_OPEN_REQUISTION = 'SET_LINK_TO_OPEN_REQUISTION';
const TOOGLE_LOADER = 'TOOGLE_LOADER';

export const setLinkOpenRequisition = (id) => ({ type: SET_LINK_TO_OPEN_REQUISTION, payload: id });
export const toggleLoading = (status) => ({ type: TOOGLE_LOADER, payload: status })
export const addOpenReuisition = (id) => (dispatch) => {
    dispatch(setLinkOpenRequisition(id))
    api.openRequistion(id).then((res) => {
        dispatch({
            type: SET_OPEN_REQUISITION,
            payload: res.data.requisition
        });
        dispatch(toggleLoading(false));
    })
}
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
    dispatch(toggleLoading(true));
    api.getAllRequistion()
        .then((res) => {
            if (res != undefined) {
                dispatch({
                    type: GET_ALL_REQUISITION,
                    payload: res.data.allRequisition
                })
                dispatch(toggleLoading(false));
            }
        })
}
export const deleteRequisition = (id) => (dispatch) => {
    dispatch(toggleLoading(true));
    api.deleteRequistion(id)
        .then(res => {
            dispatch({
                type: DELETE_REQUISITION,
                payload: id
            })
            dispatch(toggleLoading(false));
        })
}