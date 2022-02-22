import { useSelector } from 'react-redux';
import ApprovedNews from './approvedNews/ApprovedNews';
import styles from './admin.module.scss';

export default function AdminPanel() {
  const approvedNewsArray = useSelector((state) => state.news.approvedNews);
  return (
    <section className={styles.adminPanelContainer}>
      {approvedNewsArray.map((news) => (
        <ApprovedNews news={news} key={news.id} />
      ))}
    </section>
  );
}
