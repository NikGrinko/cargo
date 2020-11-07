import React from 'react';
import Header from './Header';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const RequisitionList = () => {
    const { requisitions } = useSelector(({ applications }) => applications);
    console.log(requisitions)
    return (
        <>
            <Header />
            <div className='work-space__container'>
                <div className="work-space__content">
                    <ul className='requisition-list'>
                        {requisitions.map((item, index) => <ListItem {...item} index={index + 1} />)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RequisitionList;