import React from 'react';
import Header from './Header';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import Preloader from './Preloader';
const RequisitionList = () => {
    const { requisitions, loading } = useSelector(({ applications }) => applications);
    console.log(requisitions)
    return (
        <>
            <Header requisitions={requisitions.length} />
            {loading ? <Preloader />
                :
                <div className='work-space__container'>
                    <div className="work-space__content">
                        {requisitions.length > 0 ? <ul className='requisition-list'>
                            {requisitions.map((item, index) => <ListItem key={item._id} {...item} index={index + 1} />)}
                        </ul> :
                            <div className='not-requisitions'>
                                Список заявок пуст!
                        </div>
                        }
                    </div>
                </div>}
        </>
    )
}
export default RequisitionList;