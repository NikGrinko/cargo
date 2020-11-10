import React from 'react';
import Header from './Header';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const RequisitionList = () => {
    const { requisitions } = useSelector(({ applications }) => applications);
    console.log(requisitions);
    return (
        <>
            <Header />
            <div className='work-space__container'>
                <div className="work-space__content">
                    {requisitions.length > 0 ? <ul className='requisition-list'>
                        {requisitions.map((item, index) => <ListItem key={item._id} {...item} index={index + 1} />)}
                    </ul> :
                        <div>Сейчас заявок нет!</div>
                    }
                </div>
            </div>
        </>
    )
}

export default RequisitionList;