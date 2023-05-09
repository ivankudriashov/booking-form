import Select from 'react-select';

import './react-select.css';

const ReactSelect = (props) => {

    // Привязка выбранной опции к интерфейсу
    const getValue = (value, options) => 
            value ? options.find((option) => option.value === value) : '';

    const { options, value, onChange, error, placeholder, className, classNamePrefix, errorMessage } = props;

    return (
        <div className='wrapper'>
            <Select
                className={className}
                classNamePrefix={classNamePrefix}
                placeholder={placeholder} 
                options={options}
                value={ getValue(value, options) }
                onChange={(newValue) => onChange(newValue.value)}
            />

            {error && <span className="error">{ errorMessage }</span>}
        </div>
    )
}

export default ReactSelect;
