import { InputField } from './InputField';
import { SelectField } from './selectField/SelectField';

interface ElementFormProps {
    name: string,
    type: string,
    label: string,
    options: string[];
    value: string,
    handleChange: (ev: React.ChangeEvent) => void,
    elInput: React.RefObject<HTMLInputElement>,
    placeHolder: string,

}
interface DinamicFormProps {
    element: ElementFormProps
}


export const DinamicForm: React.FC<DinamicFormProps> = ({ element }) => {

    const sortByType = () => {
        if (element.type === 'Select') return <SelectField {...element} />
        return <InputField {...element} />;
    }

    return (
        <>
            {sortByType()}
        </>
    )
}