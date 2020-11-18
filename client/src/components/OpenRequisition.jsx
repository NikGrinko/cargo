import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRequisition, redactRequisition, redactModStatus } from '../redux/actions/requisitionActions';
import Preloader from './Preloader';
import PrevButton from './button/PrevButton';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import ThanksSubmit from './ThanksSubmit';
const pathToButton = '/';
const TextToButton = 'Вернуться назад';
const descriptionToThanksSubmit = 'Ваша заявка изменена.';
const OpenRequisition = React.memo(function OpenRequisition({ loading }) {
    const { openRequisition, redactMod } = useSelector(({ applications }) => applications)
    const { _id, companyName, FullName, contactPhone, comment, time, ati } = openRequisition;
    const [error, setError] = useState('');
    const [thanks, setThanks] = useState(false);
    const [stateForm, setStateForm] = useState({
        _id,
        companyName,
        FullName,
        contactPhone,
        comment,
        ati
    })
    useEffect(() => {
        setStateForm({
            _id,
            companyName,
            FullName,
            contactPhone,
            comment,
            ati
        })
    }, [openRequisition])
    const dispatch = useDispatch();
    const deleteItem = (id) => {
        dispatch(deleteRequisition(id));
    }
    const reductModOn = () => {
        dispatch(redactModStatus(true));
    }
    const changeCompanyNameToFormState = (event) => {
        setStateForm((prevState) => {
            return {
                ...prevState,
                companyName: event.target.value
            }
        })
    }
    const changeFullNameToFormState = (event) => {
        setStateForm((prevState) => {
            return {
                ...prevState,
                FullName: event.target.value
            }
        })
    }
    const changeContactPhoneToFormState = (event) => {
        setStateForm((prevState) => {
            return {
                ...prevState,
                contactPhone: event.target.value
            }
        })
    }
    const changeCommentToFormState = (event) => {
        setStateForm((prevState) => {
            return {
                ...prevState,
                comment: event.target.value
            }
        })
    }
    const changeAtiToFormState = (event) => {
        setStateForm((prevState) => {
            return {
                ...prevState,
                ati: event.target.value
            }
        })
    }
    const saveСhanges = (_id) => {
        if (stateForm.companyName.length < 3 && stateForm.companyName.length > 15) {
            setError('Название компании должно быть не менее 3 символов и не более 15.')
        }
        else if (!(/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/).test(stateForm.contactPhone)) {
            setError('Введите корректный номер телефона, например: +79999999999')
        } else if (String(stateForm.ati).length !== 6) {
            setError('ATI - код должен состоять из 6-ти цифр.')
        } else {
            dispatch(redactRequisition(stateForm));
            setThanks(true);
            dispatch(redactModStatus(false))
        }
    }
    const closeRedactMod = () => {
        dispatch(redactModStatus(false))
    }
    return (
        <>
            {loading ? <Preloader /> : thanks ? <ThanksSubmit description={descriptionToThanksSubmit} /> :
                <div className='open-requisition-item'>
                    <div className='open-requisition-item__header'>
                        <div className='open-requisition-buttons'>
                            <PrevButton onClick={() => closeRedactMod()} path={pathToButton} text={TextToButton} />
                            {redactMod ? <button onClick={() => saveСhanges(_id)} className='button  button-font redact-color-save'>Сохранить</button>
                                : <button onClick={() => reductModOn()} className='button  button-font redact-color'>Редактировать</button>}

                            <Link to={'/'} onClick={() => deleteItem(_id)} className='button button-delete button-font'>Удалить</Link>
                        </div>
                    </div>
                    <div className="open-requisition-item__container">
                        <div className='open-item-title'>
                            <h2>{redactMod ? 'Редактирование вашей заявки' : 'Ваша Заявка'}</h2>
                            {error ? <p className='errors'>{error}</p> : ''}
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Компания:</div>
                            <div className={ClassNames('open-item-block__state', { 'open-item-block__state-redactMod': redactMod })}>
                                {companyName}
                            </div>
                            <div className='open-item-block__new-state'>
                                <input onChange={changeCompanyNameToFormState} value={stateForm.companyName} className={ClassNames('input-redact', { 'input-redact-active': redactMod })} type='text' />
                            </div>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Перевозчик:</div>
                            <div className={ClassNames('open-item-block__state', { 'open-item-block__state-redactMod': redactMod })}>
                                {FullName}
                            </div>
                            <div className='open-item-block__new-state'>
                                <input onChange={changeFullNameToFormState} value={stateForm.FullName} className={ClassNames('input-redact', { 'input-redact-active': redactMod })} type='text' />
                            </div>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Телефон:</div>
                            <div className={ClassNames('open-item-block__state', { 'open-item-block__state-redactMod': redactMod })}>
                                {contactPhone}
                            </div>
                            <div className='open-item-block__new-state'>
                                <input onChange={changeContactPhoneToFormState} value={stateForm.contactPhone} className={ClassNames('input-redact', { 'input-redact-active': redactMod })} type='tel' />
                            </div>
                        </div>
                        <div className='open-item-block'>
                            <div className='open-item-block__label'>Комментарий:</div>
                            <div className={ClassNames('open-item-block__state', { 'open-item-block__state-redactMod': redactMod })}>
                                {comment}
                            </div>
                            <div className='open-item-block__new-state'>
                                <textarea onChange={changeCommentToFormState} value={stateForm.comment} className={ClassNames('textarea-redact', { 'textarea-redact-active': redactMod })} type='text' />
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
                            <div className={ClassNames('open-item-block__state', { 'open-item-block__state-redactMod': redactMod })}>
                                {ati}
                            </div>
                            <div className='open-item-block__new-state'>
                                <input onChange={changeAtiToFormState} value={stateForm.ati} className={ClassNames('input-redact', { 'input-redact-active': redactMod })} type='number' />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
})
export default OpenRequisition;