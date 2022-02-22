import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import styles from './formNews.module.scss';
import transformDate from '../../hooks/dayJS';
import { addNewsSaga } from '../../store/actions/newsAction';
import useCloseModal from '../../hooks/useCloseModal';

export default function FormAddNews() {
  const dispatch = useDispatch();
  const { handleClose } = useCloseModal();

  const [inputsValue, setInputsValue] = useState({
    id: nanoid(5),
    title: '',
    description: '',
    createdAt: transformDate(dayjs(), 'dddd, MMMM D, YYYY h:mm'),
  });

  function handlerInputs(event) {
    setInputsValue((prev) => ({
      ...prev, [event.target.name]: event.target.value,
    }));
  }

  function handlerForm(event) {
    event.preventDefault();
    if (inputsValue.title.length !== 0 && inputsValue.description.length !== 0) {
      dispatch(addNewsSaga(inputsValue));
      setInputsValue({
        id: nanoid(5),
        title: '',
        description: '',
        createdAt: transformDate(dayjs(), 'dddd, MMMM D, YYYY h:mm'),
      });
      handleClose();
    }
  }

  return (
    <form onSubmit={handlerForm} className={styles.formNews}>
      <input
        onChange={handlerInputs}
        className={styles.formNews__input}
        type="text"
        placeholder="название"
        name="title"
      />
      <TextareaAutosize
        onChange={handlerInputs}
        className={styles.formNews__textarea}
        type="text"
        placeholder="описание"
        name="description"
      />

      <button
        className={styles.formNews__btnAddNew}
        type="submit"
      >
        добавить новость
      </button>

      <h4 className={styles.formNews__notification}>статья будет опубликована после модерации</h4>
    </form>
  );
}
