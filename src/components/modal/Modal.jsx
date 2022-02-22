import styles from './modal.module.scss';
import useCloseModal from '../../hooks/useCloseModal';

export default function Modal(props) {
  const { children, addNews } = props;
  const { closing, handleClose } = useCloseModal();

  const backdropStyle = closing ? `${styles.backdrop} ${styles.backdropHide}` : `${styles.backdrop}`;

  const modalSizeStyle = addNews ? `${styles.modalBigSize}` : `${styles.modal}`;

  return (
    <div onClick={handleClose} className={backdropStyle} role="button" aria-hidden>
      <div className={modalSizeStyle} onClick={(event) => event.stopPropagation()} role="button" aria-hidden>
        {children}
      </div>
    </div>
  );
}
