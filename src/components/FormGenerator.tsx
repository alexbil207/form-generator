import { InputField } from './InputField';
import { SelectField } from './selectField/SelectField';
import { useForm } from '../hooks/useForm';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/formReducer';
import { OptionsInsert } from './OptionsInsert';


const GeneratorWrapper = styled.section`
height: 90%;
width: 90%;
max-width: 400px;
max-height: 600px;
background-color: #fff;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
box-shadow: 0px 3px 5px -1px rgba(0, 0 ,0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0,0.14), 0px 1px 14px 0px rgba(0, 0, 0,0.12);
padding: 20px;
opacity: 0;
animation: fade 400ms forwards;
z-index: 2;
position: fixed;
top: 5%;
left: 50%;
transform: translate(-50%, 0);
overflow-y: auto;
overflow-x: hidden;
&>*{
    margin-bottom: 20px;
}
&::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}
&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.00) !important
}
&::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.1)
}
@keyframes fade{
    from {opacity: 0;}
    to{opacity: 1;}
}
`;

const BackBlackLayer = styled.div`
position: absolute;
top:0;
left: 0;
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.5);
z-index: 1;
`;



interface FormGeneratorProps {
    setIsModal: (boolean: boolean) => void,
    StyledButton: any,
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ setIsModal, StyledButton }) => {
    const elInput = useRef<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        elInput.current.focus();
    }, []); // focus first input when components mount

    const [fields, handleChange, setFields] = useForm({
        name: '',
        label: '',
        type: 'text',
        value: ''
    }); //building form fileds for store

    const addElementToStore = () => {
        const { name, label } = fields;
        if (!name || !label) return; //empty fields protection
        dispatch(add(fields));
        setIsModal(false);
        setFields({ name: '', label: '', type: 'text' }); // clear the fields for more adds
    }; // when user clicked 'add' button dispatch to store with the fields for all components who subscribed will rerender;

    return (
        <>
            <BackBlackLayer onClick={() => setIsModal(false)} />
            <GeneratorWrapper onSubmit={(ev) => ev.preventDefault()}>
                <SelectField label={'Select Input Type'} name={'type'} options={['Text', 'Checkbox', 'Select']} handleChange={handleChange} />
                <InputField label={'Enter Your Label'} type={'text'} name={'label'} value={fields.label} elInput={elInput} handleChange={handleChange} />
                <InputField label={'Enter Name'} type={'text'} name={'name'} value={fields.name} handleChange={handleChange} />
                {fields.type === 'Select' && <OptionsInsert setFields={setFields} fields={fields} StyledButton={StyledButton} />}
                <StyledButton onClick={() => {
                    addElementToStore();
                }}>Add</StyledButton>
                <StyledButton style={{ backgroundColor: 'red' }} onClick={() => setIsModal(false)}>Close</StyledButton>
            </GeneratorWrapper>
        </>
    )
};