import { InputContainer } from '../InputContainer/InputContainer'
import './InputDateRange.css'

export const InputDateRange = ({ label, col, name }) => {
    return (
        <InputContainer col={col} label={label} name={name}>
            <div className='input__item input-date__range-container'>
                <input type="date" className='input input-date__range' />
                <input type="date" className='input input-date__range' />
            </div>
        </InputContainer>
    )
}
