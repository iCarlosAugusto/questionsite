'use client';
// useModal.js
import { useState, useCallback } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'visible';
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
