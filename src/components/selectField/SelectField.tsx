import { LabelField } from "../LabelField"
import { OptionField } from "./OptionField"
import styled from 'styled-components';


interface SelectFieldProps {
    name: string,
    label: string,
    options: string[],
    handleChange: (ev: React.ChangeEvent) => void,
}


const SelectDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, handleChange }) => {
    return (
        <SelectDiv>
            <LabelField label={label} name={name} />
            <select name={name} id={name} onChange={(ev) => handleChange(ev)}>
                {options?.map((value, idx) => <OptionField key={name + idx} value={value} />)}
            </select>
        </SelectDiv>
    )
}