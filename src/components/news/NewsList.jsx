import { useLayoutEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './newsItem/NewsItem';
import styles from './newList.module.scss';
import { getAllNewsSaga, searchNewsSaga } from '../../store/actions/newsAction';
import { ModalContext } from '../../context/modalContext/ModalContext';
import FormAddNews from '../formAddNews/FormAddNews';

export default function NewsList() {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.news.newsData);
  const searchError = useSelector((state) => state.news.error);
  const userRole = useSelector((state) => state.user.userData.role);
  const { openModal, closeModal } = useContext(ModalContext);

  useLayoutEffect(() => {
    dispatch(getAllNewsSaga());
  }, [dispatch]);

  function handlerSearchInput(event) {
    const noSpace = /\S/;
    if (noSpace.test(event.target.value)) {
      dispatch(searchNewsSaga(event.target.value));
    }
    dispatch(getAllNewsSaga());
  }

  function handleBtnAddNews() {
    openModal({
      children: <FormAddNews />,
      addNews: true,
    });
  }

  const newsListContainerStyles = searchError ? '' : `${styles.newsListContainer}`;

  return (
    <section className={styles.newsContainer}>

      <div className={styles.inputContainer}>
        <input
          onChange={(event) => handlerSearchInput(event)}
          className={styles.newsContainer__input}
          type="text"
          name="search"
          placeholder="найти новость"
        />

        {userRole === 'user' && (<button onClick={handleBtnAddNews} className={styles.newsContainer__btnAddNews} type="button">добавить новость</button>)}
      </div>

      <div className={newsListContainerStyles}>
        {searchError
          ? (
            <h4
              className={styles.newsContainer__titleError}
            >
              ничего не найдено
            </h4>
          )
          : (newsData.map((news) => (
            <NewsItem news={news} key={news.id} />
          )))}
      </div>
    </section>
  );
}
