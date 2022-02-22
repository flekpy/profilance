import React, { useState, useMemo } from 'react';
import { ModalContext } from './ModalContext';
import Modal from '../../components/modal/Modal';

export default function ModalProvider({ children }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modalConfig) => {
    setModalContent(modalConfig);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = useMemo(() => ({
    openModal,
    closeModal,
  }), []);

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
}
