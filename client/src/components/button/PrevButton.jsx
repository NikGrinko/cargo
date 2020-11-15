import React from 'react';
import { NavLink } from 'react-router-dom';
const PrevButton = ({ path }) => {
    return (
        <>
            <NavLink to={path} className='button prev-button button-font'>Вернуться назад</NavLink>
        </>
    )
}

export default PrevButton;