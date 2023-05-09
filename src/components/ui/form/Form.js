import style from './form.module.css';

const Form = (props) => {
    const { handleSubmit, children, onSubmit } = props;

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            { children }
        </form>
    )
}

export default Form
