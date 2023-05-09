import style from './button.module.css';

const Button = (props) => {
    return (
        <button className={style.button} {...props}></button>
    )
}

export default Button