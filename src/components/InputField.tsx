import { LabelField } from './LabelField';
import styled from 'styled-components';




const InputDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
animation: fade-in 400ms forwards;
width: 100%;
@keyframes fade-in{
    from {opacity: 0;}
    to{opacity: 1;}
}
`

const CheckBoxDiv = styled.div`
display: flex;
align-items: center;
animation: fade-in 400ms forwards;
width: 100%;
margin:  0 0 10px 0;
& input{
flex-basis: 5%;
}
@keyframes fade-in{
    from {opacity: 0;}
    to{opacity: 1;}
}
`

interface InputFieldProps {
    label?: string,
    type: string,
    name: string,
    handleChange: (ev: React.ChangeEvent) => void,
    value: string,
    placeHolder?: string,
    elInput?: any,
}



export const InputField: React.FC<InputFieldProps> = ({ label, type, name, handleChange, value, placeHolder = '', elInput }) => {

    if (type === 'Checkbox') return (
        <CheckBoxDiv>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={(ev) => handleChange(ev)}
            />
            <LabelField label={label} name={name} />
        </CheckBoxDiv>


    )
    return (
        <InputDiv>
            <LabelField label={label} name={name} />
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeHolder}
                onChange={(ev) => handleChange(ev)}
                ref={elInput}
                required />
        </InputDiv>
    )
}