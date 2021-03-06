const GET_ALL_REQUISITION = 'GET_ALL_REQUISITION';
const ADD_NEW_REQUISITION = 'ADD_NEW_REQUISITION';
const DELETE_REQUISITION = 'DELETE_REQUISITION';
const SET_OPEN_REQUISITION = 'SET_OPEN_REQUISITION';
const SET_LINK_TO_OPEN_REQUISTION = 'SET_LINK_TO_OPEN_REQUISTION';
const TOOGLE_LOADER = 'TOOGLE_LOADER';
const REDACT_REQUISITION = 'REDACT_REQUISITION';
const REDACT_MOD = 'REDACT_MOD';
const initialState = {
    requisitions: [],
    linkToOpenRequisition: '',
    openRequisition: {},
    loading: true,
    redactMod: false
}

export const requisitionReducer = (state = initialState, action) => {
    switch (action.type) {
        //Новый обьект после редактирования
        case REDACT_REQUISITION: {
            const newRequisitions = state.requisitions.map((item) => {
                if (item._id === action.payload._id) {
                    Object.assign(item, action.payload)
                }
                return item
            })
            return {
                ...state,
                requisitions: newRequisitions
            }
        }
        case REDACT_MOD:
            return {
                ...state,
                redactMod: action.payload
            }
        //Отображаем/Скрываем загрузку
        case TOOGLE_LOADER:
            return {
                ...state,
                loading: action.payload
            }
        //Добавляем ссылку на открытую заявку
        case SET_LINK_TO_OPEN_REQUISTION:
            return {
                ...state,
                linkToOpenRequisition: action.payload
            }
        //Добавляем открытую заявку
        case SET_OPEN_REQUISITION:
            return {
                ...state,
                openRequisition: action.payload
            }
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
            return {
                ...state,
                requisitions: action.payload
            }
        default:
            return state;
    }
}