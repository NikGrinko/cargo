import React, { useEffect } from 'react';
import PrevButton from './button/PrevButton';
import { useHistory } from 'react-router-dom';
const pathToButton = '/'
const TextToButton = 'Вернуться на главную'
const ThanksSubmit = ({ description }) => {
    let history = useHistory();
    useEffect(() => {
        const timeout = setTimeout(() => {
            history.push("/")
        }, 5000)
        return () => {
            clearTimeout(timeout);
        }
    }, [])
    return (
        <>
            <div className='thanks'>
                <h1 className='thanks__title'>Спасибо!</h1>
                <p className='thanks__description'>{description}</p>
                <PrevButton path={pathToButton} text={TextToButton} />
            </div>
        </>
    )
}
export default ThanksSubmit;