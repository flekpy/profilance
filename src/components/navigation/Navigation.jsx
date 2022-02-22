import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo.svg';
import styles from './navigation.module.scss';
import { ModalContext } from '../../context/modalContext/ModalContext';
import FormLogin from '../formLogin/FormLogin';
import { logoutUserSaga } from '../../store/actions/userAction';

export default function Navigation() {
  const dispatch = useDispatch();
  const { openModal, closeModal } = useContext(ModalContext);
  const userData = useSelector((state) => state.user.userData);

  function handleClickLoginBtn() {
    openModal({
      children: <FormLogin />,
    });
  }

  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className={styles.linkContainers}>
        {userData.role === 'admin' && (
          <Link className={`${styles.navigation__link} ${styles.linkNews}`} to="/admin">администраторская</Link>
        )}
        <Link className={`${styles.navigation__link} ${styles.linkNews}`} to="/news">новости</Link>

        {userData.isAuth ? (
          <button onClick={() => dispatch(logoutUserSaga())} type="button" className={styles.navigation__btn}>выйти</button>
        ) : (
          <button onClick={handleClickLoginBtn} type="button" className={styles.navigation__btn}>войти</button>
        )}
      </div>
    </nav>
  );
}
