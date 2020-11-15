import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClassNames from 'classnames';
import { deleteRequisition } from '../redux/actions/requisitionActions';
import Preloader from './Preloader';
import PrevButton from './button/PrevButton';
const pathToButton = '/';
const OpenRequisition = ({ loading }) => {
    console.log(loading)
    const [optionsState, setOptionsState] = useState(false)
    const { openRequisition, } = useSelector(({ applications }) => applications)
    const { _id, companyName, FullName, contactPhone, comment, time, ati } = openRequisition;
    const optionsRef = useRef();
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(deleteRequisition(id));
    }
    const toggleStatusOptions = () => {
        setOptionsState(!optionsState);
    }
    //Проверка на клик вне области
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(optionsRef.current)) {
            setOptionsState(false);
        }
    }
    //Обработчик клика
    // useEffect(() => {
    //     document.body.addEventListener('click', handleOutsideClick);
    // }, [])

    return (
        <>
            {loading ? <Preloader /> :
                <div className='open-requisition-item'>
                    <div className='open-requisition-item__header'>

                        <div className='open-requisition-buttons'>
                            <PrevButton path={pathToButton} />
                            <button className='button  button-font reduct-color'>Редактировать</button>
                            <button className='button button-delete button-font'>Удалить</button>
                        </div>
                    </div>
                    <div className="open-requisition-item__container">

                        <div className='open-item-title'>
                            <h2>Ваша Заявка</h2>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Компания:</div>
                            <div className='open-item-block__state'>
                                {companyName}
                            </div>
                            <div className='open-item-company__new-state'>

                            </div>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Перевозчик:</div>
                            <div className='open-item-block__state'>
                                {FullName}
                            </div>
                            <div className='open-item-block__new-state'>

                            </div>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Телефон:</div>
                            <div className='open-item-block__state'>
                                {contactPhone}
                            </div>
                            <div className='open-item-block__new-state'>

                            </div>
                        </div>

                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Комментарий:</div>
                            <div className='open-item-block__state state-comment'>
                                {comment}
                            </div>
                            <div className='open-item-block__new-state'>

                            </div>
                        </div>

                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Дата:</div>
                            <div className='open-item-block__state'>
                                {time}
                            </div>
                        </div>


                        <div className='open-item-block'>
                            <div className='open-item-block__label'>ATI код сети перевозчика:</div>
                            <div className='open-item-block__state'>
                                {ati}
                            </div>
                            <div className='open-item-comment__new-state'>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default OpenRequisition;