import './styles.css'

export const Select = ({ id, onChange, label }: { id: string, onChange: (value: string) => void, label: string }) => {
    const data = [
        { label: 'Opción 1', value: '1' },
        { label: 'Opción 2', value: '2' }
    ]

    return (
        <div className="select-container">
            <select id={id} className="custom-select" onChange={(event) => onChange(event.target.value)}>
                <option value="">Seleccione una opción</option>
                {data.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <label htmlFor={id} className="input-label">{label}</label>
        </div>
    )
}
