import { useState } from 'react';
import { FormGenerator } from '../components/FormGenerator';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { DinamicForm } from '../components/DinamicForm';
import { EmptyFormAnimation } from '../components/EmptyFormAnimation';
import { undo } from '../store/formReducer';

const CustomFormWrapper = styled.form`
    height: 100%;
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 3px 5px -1px rgba(0, 0 ,0, 0.2), 
                0px 5px 8px 0px rgba(0, 0, 0,0.14),
                0px 1px 14px 0px rgba(0, 0, 0,0.12);
    padding: 20px;
    &>*{
        margin-bottom: 10px;
    }
`

const StyledButton = styled.button`
    display: block;
    width: 10rem;
    background-color: #208320;
    box-shadow: 0 1px 0 1px rgba(0,0,0,0.3);
    border: none;
    color: #efefef;
    outline: none;
    padding: 10px;
    margin: 10px auto;
    border-radius: 5px;
    cursor: pointer;
    &:active{
        position: relative;
        top: 2px;
    }
    &:hover{
        background-color: #4e9d4e;
    }
`
const ActionButtonsWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
export const CustomForm = () => {
    const [isModal, setIsModal] = useState(false);
    const { formElements } = useSelector(state => state.form); //subscribe to changes
    const dispatch = useDispatch();

    return (
        <>
            <StyledButton onClick={() => setIsModal(true)}>ADD FIELDS</StyledButton>
            {
                !formElements.length ?
                    <EmptyFormAnimation />
                    :
                    <CustomFormWrapper className='container' onSubmit={(ev) => ev.preventDefault()}>
                        {formElements.map((element, idx) => <DinamicForm element={element} key={element.name + idx} />)}
                        <ActionButtonsWrapper>
                            <StyledButton type='submit'>Save</StyledButton>
                            <StyledButton type='button' style={{ backgroundColor: 'red' }}
                                onClick={() => dispatch(undo())}
                            >Undo</StyledButton>
                        </ActionButtonsWrapper>
                    </CustomFormWrapper>
            }
            {isModal && <FormGenerator setIsModal={setIsModal} StyledButton={StyledButton} />}

        </>
    )
}