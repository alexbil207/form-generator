import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { InputField } from './InputField';
import { LabelField } from './LabelField';




interface OptionsInsertProps {
    setFields: (value: any) => void
    fields: any,
    StyledButton: any,
}

export const OptionsInsert: React.FC<OptionsInsertProps> = ({ setFields, fields, StyledButton }) => {
    const [counter, setCounter] = useState<number>(1); // first option already exists
    const [options, handleOptionsChange, setOptions] = useForm({
        option1: '',
    });

    useEffect(() => {
        setFields((prevFields: any) => ({ ...prevFields, options: [] }))
        return () => {
            delete fields.options;
        }
    }, []); //when component mount adding options array to father state and delete when component die.. 
    useEffect(() => setOptions((prevOptions: any) => ({ ...prevOptions, ['option' + counter]: '' })), [counter]); // adding generic options to state
    useEffect(() => setFields((prevFields: any) => ({ ...prevFields, options: Object.values(options) })), [options]); // update father state with new options 


    return (
        <>
            <LabelField label={'Options'} name={'option1'} />
            {Object.keys(options).map((option, idx) => <InputField type={'text'}
                name={`option${idx + 1}`}
                key={`option${idx}`}
                value={options[`option${idx + 1}`]}
                handleChange={handleOptionsChange} />)}
            <StyledButton onClick={() => setCounter(prevCounter => (prevCounter + 1))}>Add Option</StyledButton>
        </>
    )
};