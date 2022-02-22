import styles from './newsItem.module.scss';

export default function NewsItem({ news }) {
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
    </div>
  );
}
