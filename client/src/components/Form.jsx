import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import ClassNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addRequisition } from '../redux/actions/requisitionActions';
import PrevButton from './button/PrevButton';
import ThanksSubmit from './ThanksSubmit';
const pathToButton = '/';
const TextToButton = 'Вернуться назад';
const descriptionToThanksSubmit = 'Ваша заявка добавлена.';
const formGeneration = [
    {
        id: 1, htmlFor: "companyName", labelChildren: 'Название вашей фирмы',
        fieldClass: "form-item__input", fieldName: 'companyName', fieldId: 'companyName', fieldComponent: "input", fieldType: 'text', required: true
    },
    {
        id: 2, htmlFor: "FullName", labelChildren: 'ФИО перевозчика',
        fieldClass: "form-item__input", fieldName: 'FullName', fieldId: 'FullName', fieldComponent: "input", fieldType: 'text', required: true
    },
    {
        id: 3, htmlFor: "contactPhone", labelChildren: 'Контактный телефон',
        fieldClass: "form-item__input", fieldName: 'contactPhone', fieldId: 'contactPhone', fieldComponent: "input", fieldType: 'tel', required: true
    },
    {
        id: 4, htmlFor: "comment", labelChildren: 'Комментарии',
        fieldClass: "form-item__textarea", fieldName: "comment", fieldId: "comment", fieldComponent: "textarea", fieldType: 'text', required: false
    },
    {
        id: 5, htmlFor: "ati", labelChildren: 'ATI код сети перевозчика',
        fieldClass: "form-item__input", fieldName: "ati", fieldId: "ati", fieldComponent: "input", fieldType: 'text', required: true
    }
]
const FormAddRequisition = () => {
    const form = useSelector(({ form }) => form.addRequisitionForm)
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false)
    let addNewRequisition = (values) => {
        dispatch(addRequisition(values))
        setSubmit(true);
        dispatch(reset('addRequisitionForm'));
    }
    const [laberState, setLaberState] = useState([])
    //Добавляет в laberState индекс input focus
    const focusInput = (index) => {
        setLaberState(prev => {
            const newArr = [];
            for (let item of prev) {
                newArr.push(item)
            }
            newArr.push(index)
            return newArr
        })
    }
    //Удаляет в laberState индекс input unfocus
    const blurInput = (index, name) => {
        if (form.values) {
            for (let item of Object.keys(form.values)) {
                if (item === name) {
                    return
                }
            }
        } else {
            setLaberState(prev => {
                const newArr = prev.splice(index, 0)
                return [newArr]
            })
        }
    }
    return (
        <div className='form-page'>
            <div className='form-page__container'>
                {submit ? <ThanksSubmit description={descriptionToThanksSubmit} /> : <>
                    <h1>Заполните вашу заявку!</h1>
                    <AddRequisitionFormRedux blurInput={blurInput} focusInput={focusInput} laberState={laberState} onSubmit={addNewRequisition} />
                </>} </div>
        </div>
    )
}
const RequisitionForm = ({ handleSubmit, laberState, focusInput, blurInput }) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            {formGeneration.map((item, index) => {
                return (
                    <div key={item.id} className='form-item'>
                        <label className={ClassNames("form-item__label", { "form-item__label-active": laberState.includes(index) })}
                            htmlFor={item.htmlFor}>
                            {item.labelChildren}
                        </label>
                        <Field onBlur={() => blurInput(index, item.fieldName)}
                            onClick={() => focusInput(index)}
                            onChange={() => focusInput(index)}
                            className={item.fieldClass}
                            required={item.required}
                            name={item.fieldName}
                            id={item.fieldId}
                            component={item.fieldComponent}
                            type={item.fieldType} />
                    </div>
                )
            })}
            <div className='form-item__button'>
                <PrevButton path={pathToButton} text={TextToButton} />
                <input type='submit' className='button-submit button-font' value='Отправить заявку' />
            </div>
        </form>
    )
}
const AddRequisitionFormRedux = reduxForm({ form: 'addRequisitionForm' })(RequisitionForm);
export default FormAddRequisition;