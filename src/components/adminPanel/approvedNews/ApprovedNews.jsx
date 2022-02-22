import { useDispatch } from 'react-redux';
import styles from './approved.module.scss';
import { approveNewsSaga, deleteNewsSaga } from '../../../store/actions/newsAction';

export default function ApprovedNews({ news }) {
  const dispatch = useDispatch();

  function publishedNews() {
    dispatch(approveNewsSaga(news));
  }

  function deleteNews() {
    dispatch(deleteNewsSaga(news));
  }

  return (
    <div className={styles.newsContainer}>
      <h4 className={styles.newsContainer__title}>
        {news.title}
      </h4>
      <span className={styles.newsContainer__spanBody}>
        {news.description}
      </span>
      <span className={styles.newsContainer__spanCreatedAt}>
        {news.createdAt}
      </span>

      <div>
        <button
          onClick={publishedNews}
          className={`${styles.newsContainer__btn} ${styles.btn_margin}`}
          type="button"
        >
          опубликовать
        </button>
        <button
          onClick={deleteNews}
          className={styles.newsContainer__btn}
          type="button"
        >
          удалить
        </button>
      </div>

    </div>
  );
}
