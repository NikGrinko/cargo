import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllRequisition } from '../redux/actions/requisitionActions';
import { useDispatch } from 'react-redux';
import ClassName from 'classnames';

const Header = React.memo(function Header() {
    const [updateState, setupdateState] = useState(false);
    const dispatch = useDispatch();
    const updateList = () => {

        setupdateState(true);
        dispatch(getAllRequisition())
        setTimeout(() => {
            setupdateState(false)
        }, 500)
    }
    return (
        <div className='work-space__header'>
            <div className='work-space__header-container'>
                <div className='header-title'><h1>Доступные заявки</h1></div>
                <div className='header-buttons-container'>
                    <div onClick={() => updateList()} className='update-button'>
                        <svg className={ClassName('svg-update', { 'svg-update-active': updateState })} viewBox="0 0 25 25" fill="none" >
                            <path d="M17.3775 6.2475C15.9121 4.87537 14.0104 4.12322 11.9929 4.125C8.36203 4.12819 5.2275 6.61772 4.36205 10.0711C4.29905 10.3225 4.07508 10.5 3.81591 10.5H1.12983C0.778359 10.5 0.511359 10.1809 0.576375 9.8355C1.59061 4.44956 6.31936 0.375 12 0.375C15.1147 0.375 17.9433 1.60012 20.0304 3.59461L21.7045 1.92047C22.4132 1.21177 23.625 1.7137 23.625 2.71598V9C23.625 9.62133 23.1213 10.125 22.5 10.125H16.216C15.2137 10.125 14.7118 8.91323 15.4205 8.20448L17.3775 6.2475ZM1.5 13.875H7.78402C8.7863 13.875 9.28823 15.0868 8.57953 15.7955L6.6225 17.7525C8.08791 19.1247 9.98977 19.8769 12.0073 19.875C15.6363 19.8718 18.7721 17.3839 19.638 13.929C19.701 13.6776 19.9249 13.5001 20.1841 13.5001H22.8702C23.2217 13.5001 23.4887 13.8192 23.4237 14.1646C22.4094 19.5504 17.6806 23.625 12 23.625C8.88525 23.625 6.05667 22.3999 3.96961 20.4054L2.29547 22.0795C1.58677 22.7882 0.375 22.2863 0.375 21.284V15C0.375 14.3787 0.878672 13.875 1.5 13.875Z" fill="#F2911B" fillOpacity="0.9" />
                        </svg>
                    </div>
                    <div className='add-requisition'>
                        <NavLink to='/new-requisition'>
                            <svg className="plus" version="1.1" x="0px"
                                y="0px" viewBox="0 0 490 490"  >
                                <g>
                                    <g>
                                        <g>
                                            <path className="plus-item" d="M227.8,174.1v53.7h-53.7c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h53.7v53.7c0,9.5,7.7,17.2,17.2,17.2
				s17.1-7.7,17.1-17.2v-53.7h53.7c9.5,0,17.2-7.7,17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2
				S227.8,164.6,227.8,174.1z" />
                                            <path className="plus-item" d="M71.7,71.7C25.5,118,0,179.5,0,245s25.5,127,71.8,173.3C118,464.5,179.6,490,245,490s127-25.5,173.3-71.8
				C464.5,372,490,310.4,490,245s-25.5-127-71.8-173.3C372,25.5,310.5,0,245,0C179.6,0,118,25.5,71.7,71.7z M455.7,245
				c0,56.3-21.9,109.2-61.7,149s-92.7,61.7-149,61.7S135.8,433.8,96,394s-61.7-92.7-61.7-149S56.2,135.8,96,96s92.7-61.7,149-61.7
				S354.2,56.2,394,96S455.7,188.7,455.7,245z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </NavLink >
                    </div>
                </div>
            </div>
        </div >
    )
})




export default Header;