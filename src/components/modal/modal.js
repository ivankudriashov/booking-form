import style from './modal.module.css';

import { useEffect } from 'react';

const Modal = ({content, visible, onClose}) => {
    const rootClasses = [style.modal]

    // Добавление класса исходя из значения пропса visible
    if(visible) {
      // style.active - класс делающий модальное окно видимым
        rootClasses.push(style.active)
    }

    useEffect(() => {
      // Закрытие модального окна по нажатию на клавишу Esc
        const close = (e) => {
          if(e.key === "Escape"){
            onClose();
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[onClose]);

    return (
        <div className={rootClasses.join(' ')}>
            <div className={style.content}>
                <div className={style.close} onClick={() => onClose()}>X</div>
                {content}
            </div>
        </div>
    )
}

export default Modal;