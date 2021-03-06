import React, { useState, useRef, useEffect } from 'react';
import ClassNames from 'classnames';
import { deleteRequisition, addOpenReuisition, toggleLoading, redactModStatus } from '../redux/actions/requisitionActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const ListItem = ({ _id, companyName, FullName, ati, time, contactPhone, comment, index }) => {
    const [optionsState, setoptionsState] = useState(false)
    const optionsRef = useRef();
    const dispatch = useDispatch();
    const openRequisition = (id) => {
        dispatch(toggleLoading(true));
        dispatch(addOpenReuisition(id))
    }
    const deleteItem = (id) => {
        dispatch(deleteRequisition(id));
    }
    //Изменение статуса отображения опций
    const toggleStatusOptions = () => {
        setoptionsState(!optionsState);
    }
    //Проверка на клик вне области
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(optionsRef.current)) {
            setoptionsState(false);
        }
    }
    const openRedactItem = (id) => {
        dispatch(redactModStatus(true))
        dispatch(toggleLoading(true));
        dispatch(addOpenReuisition(id))
    }
    //Обработчик клика
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, [])
    return (
        <>
            <li className='requisition-list__item'>
                <div className='item-title'>
                    <h3 className=''>
                        Заявка №{index}
                    </h3>
                    <div ref={optionsRef} className="redact">
                        <svg className={ClassNames('options-svg', { 'options-svg-active': optionsState })} onClick={() => toggleStatusOptions()} width="25" height="25" viewBox="0 0 16 16" fill="none">
                            <path d="M15.2313 9.86564L13.9 9.09689C14.0344 8.37189 14.0344 7.62814 13.9 6.90314L15.2313 6.13439C15.3844 6.04689 15.4532 5.86564 15.4032 5.69689C15.0563 4.58439 14.4657 3.57814 13.6938 2.74064C13.5751 2.61252 13.3813 2.58127 13.2313 2.66877L11.9 3.43752C11.3407 2.95627 10.6969 2.58439 10 2.34064V0.806267C10 0.631267 9.87817 0.478142 9.7063 0.440642C8.55943 0.184392 7.38443 0.196892 6.2938 0.440642C6.12193 0.478142 6.00005 0.631267 6.00005 0.806267V2.34377C5.3063 2.59064 4.66255 2.96252 4.10005 3.44064L2.77193 2.67189C2.6188 2.58439 2.42818 2.61252 2.30943 2.74377C1.53755 3.57814 0.946926 4.58439 0.600051 5.70002C0.546926 5.86877 0.618801 6.05002 0.771926 6.13752L2.10318 6.90627C1.9688 7.63127 1.9688 8.37502 2.10318 9.10002L0.771926 9.86877C0.618801 9.95627 0.550051 10.1375 0.600051 10.3063C0.946926 11.4188 1.53755 12.425 2.30943 13.2625C2.42818 13.3906 2.62193 13.4219 2.77193 13.3344L4.10318 12.5656C4.66255 13.0469 5.3063 13.4188 6.00318 13.6625V15.2C6.00318 15.375 6.12505 15.5281 6.29693 15.5656C7.4438 15.8219 8.6188 15.8094 9.70942 15.5656C9.8813 15.5281 10.0032 15.375 10.0032 15.2V13.6625C10.6969 13.4156 11.3407 13.0438 11.9032 12.5656L13.2344 13.3344C13.3875 13.4219 13.5782 13.3938 13.6969 13.2625C14.4688 12.4281 15.0594 11.4219 15.4063 10.3063C15.4532 10.1344 15.3844 9.95314 15.2313 9.86564ZM8.00005 10.5C6.62193 10.5 5.50005 9.37814 5.50005 8.00002C5.50005 6.62189 6.62193 5.50002 8.00005 5.50002C9.37818 5.50002 10.5 6.62189 10.5 8.00002C10.5 9.37814 9.37818 10.5 8.00005 10.5Z" fill="#F2911B
" />
                        </svg>
                        <ul className={ClassNames('redact-options', { 'redact-options-active': optionsState })}>
                            <li className='redact-options__item' onClick={() => { deleteItem(_id) }} >удалить</li>
                            <Link onClick={() => openRedactItem(_id)} className='redact-options__item' to={`/requisition/${_id}`}>редактировать</Link>
                        </ul>
                    </div>
                </div>
                <Link to={`/requisition/${_id}`} className='item-click' onClick={() => openRequisition(_id)}>
                    <div className='item-company'>
                        Компания - {companyName}
                    </div>
                    <div className="item-name">
                        Перевозчик - {FullName}
                    </div>
                    <div className='item-phome'>
                        Телефон: +{contactPhone}
                    </div>
                    <div className="item-comment">
                        <div className="item-comment__content">
                            Комментарий: {comment}
                        </div>
                    </div>
                    <div className="item-data">
                        Дата: {time}
                    </div>
                </Link>
                <div className="item-ati">
                    <a className="ati" target='_blank' href={`https://ati.su/firms/${ati}`}>Мы на ati.su</a>
                </div>
            </li>
        </>
    )
}
export default ListItem;