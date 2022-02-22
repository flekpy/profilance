import { useSelector } from 'react-redux';
import styles from './main.module.scss';

export default function Main() {
  const userData = useSelector((state) => state.user.userData);
  return (
    <section className={styles.mainSection}>
      {userData.isAuth
        ? (
          <h1 className={styles.mainSection__title}>
            Привет,
            {' '}
            {userData.login}
          </h1>
        )
        : <h1 className={styles.mainSection__title}>Привет, Гость</h1>}
    </section>
  );
}
