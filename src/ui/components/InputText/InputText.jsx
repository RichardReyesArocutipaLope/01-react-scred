import { InputContainer } from '../inputContainer'
import './InputText.css'

export const InputText = ({ col, label, id, register, error }) => {
  return (
    <InputContainer col={col} error={error}>
      <input type="text" {...register} id={id} className={`input input-text ${error ? 'input-error' : ''}`} />
      {label && <label className='input__label' htmlFor={id}>{label}</label>}
    </InputContainer>
  )
}
