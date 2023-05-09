import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from './datapicker.module.css'

import ru from 'date-fns/locale/ru';

// Регистрация региона для datepicker
registerLocale('ru_RU', ru);

const ReactDataPicker = (props) => {
    const { value, onChange, error, dateFormat, showTimeSelect, placeholderText, minDate, errorMessage, timeCaption, locale } = props;

    return (
        <div className={style.wrapper}>
            <DatePicker
                onChange={ onChange }
                selected={value}
                showTimeSelect={showTimeSelect}
                dateFormat={dateFormat}
                locale={locale}
                minDate={ minDate }
                placeholderText={placeholderText}
                timeCaption={timeCaption}
                className={style.input}
            />

            {error && <span className={style.error}>{ errorMessage }</span>}
        </div>
    )
}

export default ReactDataPicker