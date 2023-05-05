import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import style from './app.css';

const towerOptions = [{
    value: "А",
    label: "Башня А",
  },{
    value: "Б",
    label: "Башня Б",
  }]

const floorOptions = []

const roomOptions = [];

const fillOptions = (start, end, arr, label) => {
  for(let i = start; i <= end; i++) {
    arr.push({
      value: `${i}`,
      label: `${label} ${i}`,
    })
  }
}

fillOptions(3, 27, floorOptions, "Этаж");
fillOptions(1, 10, roomOptions, "Переговорная №");

const getValue = (value, options) => 
  value ? options.find((option) => option.value === value) : ''

const App = () => {
  const {register, handleSubmit, formState: { errors }, reset, control } = useForm();

  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  let dt = new Date().toISOString().split('T')[0];

  const onSubmit = (data,e) => {
    e.target.reset();

    console.log(JSON.stringify(data))
  };

  return (
    <div className={style.app}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='towel'
          rules={{
            required: 'Выберите башню'
          }}
          render={({field: { onChange, value }, fieldState: { error }} ) => (
            <>
              <Select 
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Выберите башню" 
                options={towerOptions}
                value={ getValue(value, towerOptions) }
                onChange={(newValue) => onChange(newValue.value)}
              />

              {error && <span>Выберите башню</span>}
            </>
          )}
        />

        <Controller
          control={control}
          name='floor'
          rules={{
            required: 'Выберите этаж'
          }}
          render={({field: { onChange, value }, fieldState: { error }} ) => (
            <>
              <Select 
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Выберите этаж" 
                options={floorOptions}
                value={ getValue(value, floorOptions) }
                onChange={(newValue) => onChange(newValue.value)}
              />

              {error && <span>Выберите этаж</span>}
            </>
          )}
        />

        <Controller
          control={control}
          name='meetingRoom'
          rules={{
            required: 'Выберите переговорную'
          }}
          render={({field: { onChange, value }, fieldState: { error }} ) => (
            <>
              <Select 
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Выберите переговорную" 
                options={roomOptions}
                value={ getValue(value, roomOptions) }
                onChange={(newValue) => onChange(newValue.value)}
              />

              {error && <span>Выберите этаж</span>}
            </>
          )}
        />

        {/* <select {...register("tower", { required: true })}>
          <option value="">Выберите башню...</option>
          <option value="А">Башня А</option>
          <option value="Б">Башня Б</option>
        </select>
        {errors.tower && <span>Выберите башню</span>} */}

        {/* <select {...register("floor", { required: true })}>
          <option value="">Выберите этаж...</option>
          <option value="3">Этаж 3</option>
          <option value="4">Этаж 4</option>
          <option value="5">Этаж 5</option>
          <option value="6">Этаж 6</option>
        </select>
        {errors.floor && <span>Выберите этаж</span>} */}

        {/* <select {...register("meetingRoom", { required: true })}>
          <option value="">Выберите переговорную...</option>
          <option value="3">Переговорная 3</option>
          <option value="4">Переговорная 4</option>
          <option value="5">Переговорная 5</option>
          <option value="6">Переговорная 6</option>
        </select>
        {errors.meetingRoom && <span>Выберите переговорную</span>} */}

        <input type="date"
          value={date}
          min={dt}
          {...register("date", 
            { required: true }
          )}
          onChange={(e) => setDate(e.target.value)}
        />

        <input type="time" value={time} {...register("time", { required: true })} onChange={(e) => setTime(e.target.value)}/>

        <textarea {...register("comments")} placeholder="Комментарии" />

        <button type="submit">
          Отправить
        </button>

        <button
          type="button"
          onClick={() => reset()}
        >
          Очистить форму
        </button>
      </form>
    </div>
  );
}

export default App;
