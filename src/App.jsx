import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Navigation from './components/navigation/Navigation';
import styles from './app.module.scss';
import ModalProvider from './context/modalContext/ModalContextProvider';
import NewsList from './components/news/NewsList';
import AdminPanel from './components/adminPanel/AdminPanel';

function App() {
  return (
    <ModalProvider>
      <div className={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
