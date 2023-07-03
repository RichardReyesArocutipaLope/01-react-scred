import { InputContainer } from '../inputContainer/InputContainer'
import './InputMoneyRange.css'

export const InputMoneyRange = ({ label, col, name }) => {
    return (
        <InputContainer col={col}>
            <div className='input__item input-number__range-container'>
                <div className='input-number__symbol'>S/.</div>
                <div className='input-number__symbol'>S/.</div>
                <input type="number" className='input input-number__range' step="0.01" min="0" max="10000000" />
                <input type="number" className='input input-number__range' step="0.01" min="0" max="10000000" />
            </div>
            {label && <label className='input__label' htmlFor={name}>{label}</label>}
        </InputContainer>
    )
}
