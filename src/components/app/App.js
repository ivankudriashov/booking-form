import { useState } from 'react'

import BookingForm from '../bookingForm/BookingForm';
import Modal from '../modal/modal';

import style from './app.module.css';

const App = () => {
  // Состояние модального окна.
  const [modal, setModal] = useState({
    visible: false,
    content: ''
  });

  return (
    <div className={style.app}>
      <BookingForm setModal={setModal}/>

{/* Оповещение пользователя об успехе/ошибке оправки формы */}
      <Modal
        content={modal.content}
        visible={modal.visible}
        setVisible={setModal}
        onClose = {
            () => {setModal({
              visible: false,
              content: ''
            })}
          }
        >
      </Modal>
    </div>
  );
}

export default App;
