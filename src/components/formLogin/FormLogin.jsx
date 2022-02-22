import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './formLogin.module.scss';
import SvgGenerator from '../svgGenerator/SvgGenerator';
import { loginUserSaga } from '../../store/actions/userAction';
import useCloseModal from '../../hooks/useCloseModal';

export default function FormLogin() {
  const dispatch = useDispatch();
  const [inputsValue, setInputsValue] = useState({ login: '', password: '' });
  const loginError = useSelector((state) => state.user.error);
  const isAuth = useSelector((state) => state.user.userData.isAuth);
  const { handleClose } = useCloseModal();

  function handlerInputs(event) {
    setInputsValue((prev) => ({
      ...prev, [event.target.name]: event.target.value,
    }));
  }

  function submitForm(event) {
    event.preventDefault();
    dispatch(loginUserSaga(inputsValue));
  }

  useEffect(() => {
    if (isAuth) {
      handleClose();
    }
  }, [handleClose, isAuth]);

  return (
    <form onSubmit={submitForm} className={styles.formLogin}>
      <h3 className={styles.formLogin__title}>Войти</h3>
      <div className={styles.inputContainer}>
        <input
          onChange={handlerInputs}
          className={styles.formLogin__input}
          type="text"
          name="login"
          placeholder="Логин"
        />
        <SvgGenerator name="login" />
      </div>

      <div className={styles.inputContainer}>
        <input
          onChange={handlerInputs}
          className={styles.formLogin__input}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <SvgGenerator name="password" />
      </div>

      <button className={styles.formLogin__btn} type="submit">Войти</button>

      {loginError ? (
        <span className={styles.formLogin__titleError}>{loginError}</span>
      ) : null}
    </form>
  );
}
