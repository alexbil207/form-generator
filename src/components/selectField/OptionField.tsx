

interface OptionFieldProps {
    value: string,
}

export const OptionField: React.FC<OptionFieldProps> = ({ value }) => {
    return (
        <>
            <option value={value}>{value}</option>
        </>
    )
}