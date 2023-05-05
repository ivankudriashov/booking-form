import { useForm } from 'react-hook-form';
import { useState } from 'react';
import style from './app.module.css';

const App = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();
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
        <select {...register("tower", { required: true })}>
          <option value="">Выберите башню...</option>
          <option value="А">Башня А</option>
          <option value="Б">Башня Б</option>
        </select>
        {errors.tower && <span>Выберите башню</span>}

        <select {...register("floor", { required: true })}>
          <option value="">Выберите этаж...</option>
          <option value="3">Этаж 3</option>
          <option value="4">Этаж 4</option>
          <option value="5">Этаж 5</option>
          <option value="6">Этаж 6</option>
        </select>
        {errors.floor && <span>Выберите этаж</span>}

        <select {...register("meetingRoom", { required: true })}>
          <option value="">Выберите переговорную...</option>
          <option value="3">Переговорная 3</option>
          <option value="4">Переговорная 4</option>
          <option value="5">Переговорная 5</option>
          <option value="6">Переговорная 6</option>
        </select>
        {errors.meetingRoom && <span>Выберите переговорную</span>}

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

        <input type="submit" />

        <input
          type="button"
          onClick={() => reset()}
          value="Очистить форму"
        />
      </form>
    </div>
  );
}

export default App;
