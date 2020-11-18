import React from 'react';
import { NavLink } from 'react-router-dom';
import { redactModStatus } from '../../redux/actions/requisitionActions';
import { useDispatch } from 'react-redux';
const PrevButton = ({ path, text }) => {
    const dispatch = useDispatch();
    return (
        <>
            <NavLink onClick={() => dispatch(redactModStatus(false))} to={path} className='button prev-button button-font'>{text}</NavLink>
        </>
    )
}
export default PrevButton;