import { Controller, useForm } from 'react-hook-form';

import Form from "../ui/form/Form";
import ReactSelect from '../ui/select/ReactSelect';
import ReactDataPicker from '../ui/dataPicker/DataPicker';
import TextAria from '../ui/textAria/TextAria';
import Button from '../ui/button/Button';

import { towerOptions, floorOptions, roomOptions } from '../../utils/fieldsOptions'

import style from './booking-form.module.css';

const BookingForm = () => {
    const { handleSubmit, reset, control } = useForm();

    let dt = new Date();

    const onSubmit = (data) => {
        reset({
            towel: '',
            floor: '',
            meetingRoom: '',
            date: '',
            comments: ''
        })

        console.log(JSON.stringify(data))
    };

    return (
        <div className={style.container}>
            <h2 className={style.formName}>
                Форма бронирования переговорной
            </h2>
            <Form handleSubmit={handleSubmit} reset={reset} onSubmit={onSubmit}>
                <Controller
                    control={ control }
                    name='towel'
                    rules={{
                    required: 'Выберите башню'
                    }}
                    render={({field: { onChange, value }, fieldState: { error }} ) => (
                        <ReactSelect 
                            className={"react-select-container"}
                            classNamePrefix={"react-select"}
                            placeholder={"Выберите башню*"}
                            options={towerOptions}
                            onChange={onChange}
                            value={value}
                            error={error}
                            errorMessage={"Необходимо выбрать башню"}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='floor'
                    rules={{
                    required: 'Выберите этаж'
                    }}
                    render={({field: { onChange, value }, fieldState: { error }} ) => (
                        <ReactSelect 
                            className={"react-select-container"}
                            classNamePrefix={"react-select"}
                            placeholder={"Выберите этаж*"}
                            options={floorOptions}
                            onChange={ onChange }
                            value={value}
                            error={error}
                            errorMessage={"Необходимо выбрать этаж"}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='meetingRoom'
                    rules={{
                    required: 'Выберите переговорную'
                    }}
                    render={({field: { onChange, value }, fieldState: { error }} ) => (
                        <ReactSelect 
                            className={"react-select-container"}
                            classNamePrefix={"react-select"}
                            placeholder={"Выберите переговорную*"}
                            options={roomOptions}
                            onChange={ onChange }
                            value={value}
                            error={error}
                            errorMessage={"Необходимо выбрать переговорную"}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='date'
                    rules={{
                    required: 'Выберите дату и время'
                    }}
                    render={({field: { onChange, value }, fieldState: { error }} ) => (
                        <ReactDataPicker 
                            onChange={ onChange }
                            value={ value }
                            showTimeSelect={ true }
                            dateFormat="dd/MM/yyyy HH:mm"
                            locale="ru_RU"
                            minDate={ dt }
                            placeholderText="Выберите дату и время*"
                            timeCaption="Время"
                            error={ error }
                            errorMessage={ "Необходимо выбрать дату" }
                        />
                    )}
                />

                <Controller
                    control={control}
                    name='comments'
                    render={({field: { onChange, value, name }} ) => (
                        <TextAria
                            onChange={ onChange }
                            name={name}
                            value={ value }
                            placeholder="Комментарии"
                        />
                    )}
                />

                <div className={style.buttons}>
                    <Button type="submit">
                        Отправить
                    </Button>

                    <Button 
                        type="button"
                        onClick={() => reset({
                            towel: '',
                            floor: '',
                            meetingRoom: '',
                            date: '',
                            comments: ''
                        })}
                    >
                        Очистить форму
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default BookingForm