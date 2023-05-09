import style from './text-aria.module.css'

const TextAria = (props) => {
    const { name, onChange, value, placeholder } = props;
    
    return (
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={style.textarea}
        />
    )
}

export default TextAria